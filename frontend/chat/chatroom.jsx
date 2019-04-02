import React from 'react';
import MessageForm from './message_form';



class ChatRoom extends React.Component {


  constructor(props){
    super(props);
    this.state = {messages: []};
    this.bottom = React.createRef();
  }

  subscribe(){
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.id },
      {
        received: data => {
          switch (data.type) {
            case "message":
              this.setState({
                messages: this.state.messages.concat(data.message)
              });
              break
            case "messages":
              this.setState({ messages: data.messages });
              break;
          }
        },
        speak: function (data) { return this.perform("speak", data); },
        load: function (id) { return this.perform("load", id); },
        unsub: function () { App.cable.subscriptions.remove(this); }
      }
    );
  }
  componentDidMount() {
    this.subscribe();
    this.loadMount();
  }

  loadMount(){
    App.cable.subscriptions.subscriptions[0].load(this.props.id);
  }


  loadChat(e) {
    e.preventDefault();
    this.loadMount();
  }


  componentDidUpdate(prevProps){
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }

    if (prevProps.id !== this.props.id){
      App.cable.subscriptions.subscriptions[0].unsub();
      this.subscribe();
    }
  }

  componentWillUnmount(){
    App.cable.subscriptions.subscriptions.forEach((sub) => sub.unsub());
  }
  render(){

    const messageList = this.state.messages.map((message) => {
      return (
        <li>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    return (
      <div onLoad={this.loadChat.bind(this)} className="chatroom-container">

        <div className="channel-chat">
          <div ref={this.bottom} />
          <div className="message-list">{messageList}</div>
          <MessageForm cID={this.props.id} user={this.props.user} />
        </div>

      </div>
    );
  }
}
export default ChatRoom;