import React from 'react';
import MessageForm from './message_form';



class ChatRoom extends React.Component {


  constructor(props){
    super(props);
    this.state = {messages: []};
    this.bottom = React.createRef();
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      {channel: "ChatChannel"},
      {
        received: data =>{
          switch(data.type){
            case "message":
            this.setState({
              messages: this.state.messages.concat(data.message)
            });
            break
            case "messages":
            this.setState({ messages: data.messages});
            break;
          }
        },
        speak: function(data) {return this.perform("speak", data);},
        load: function() {return this.perform("load");}
      }
      );
    this.loadMount();
  }
  loadMount(){
    App.cable.subscriptions.subscriptions[0].load();
  }
  loadChat(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }


  componentDidUpdate(){
    this.bottom.current.scrollIntoView();
  }
  render(){

    const messageList = this.state.messages.map((message) => {
      return (
        <li key={message.id}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div onLoad={this.loadChat} className="chatroom-container">
        <div>
          ChatRoom
        </div>
        
        <div className="message-list">{messageList}</div>
        <div ref={this.bottom} />
        <MessageForm />
      </div>
    );
  }
}
export default ChatRoom;