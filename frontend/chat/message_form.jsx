import React from 'react';

class MessageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body: ""}
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value });
  }
  handleSubmit(e){
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({ message: this.state.body });
    this.setState({body: "" });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            onChange={this.update("body")}
            value={this.state.body}
            placeholder = "Message #General Chat"
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default MessageForm;