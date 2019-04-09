import React from 'react';
import MessageForm from './message_form';



class ChatRoom extends React.Component {


  constructor(props){
    super(props);
    this.state = {messages: [], authors: []};
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
                messages: this.state.messages.concat(data.message),
                authors: this.state.authors.concat(data.author),
                dates: this.state.dates.concat(data.date)
              });
              break
            case "messages":
              this.setState({ 
                messages: data.messages,
                authors: data.authors,
                dates: data.dates
              });
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
  parseChat(){
    for (let i = 0; i < this.state.messages.length; i++) {
      if (i < this.state.messages.length - 1){
        if (this.state.authors[i] === this.state.authors[i+1]){

          this.setState({
            messages: this.state.messages.slice(0,i).concat(
              this.state.messages[i] + "\n" + this.state.messages[i+1]
            ).concat(this.state.messages.slice(i+2)),
            authors: this.state.authors.slice(0,i).concat(this.state.authors.slice(i+1)),
            dates: this.state.dates.slice(0, i).concat(this.state.dates.slice(i + 1)),
          })
          i = 0
        }
      }
    }
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
    
    let messageList = [];
    for(let i = 0; i < this.state.messages.length; i++){
      if (this.state.authors[i] !== this.state.authors[i - 1]){

        messageList.push(
  
          <li key={Math.random() * 10000000} className="message">
            <div className='messageLineHeader'></div>
            <div>
              <img src={window.chatIcon} />
              <div className='message-content'>
    
                <div className="message-content-header">
                  <h3>{this.state.authors[i]}</h3>
                  <h4>{this.state.dates[i]}</h4>
                </div>
                <p className='message-body'>
                  {this.state.messages[i]}
                </p>
              </div>
              <div ref={this.bottom} />
            </div>
          </li>
  
        ) 

      } else {
        messageList.push(
          <div key={Math.random() * 10000000} className='append-div'>

            <p className='message-body-append'>
              {this.state.messages[i]}
            </p>
            <div ref={this.bottom} />
          </div>
        )
      }

    }
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