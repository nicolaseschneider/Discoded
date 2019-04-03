import React from 'react';
import ChatRoom from '../../../../chat/chatroom';
import {withRouter} from 'react-router-dom';
import UserList from './users/user_list';
class ChannelDetail extends React.Component{
  
  componentDidMount() {
    
    this.props.selectChannel(this.props.cID);
    this.props.fetchChannel(this.props.cID);


  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.cID) {
      this.props.selectChannel(this.props.cID);
      this.props.fetchChannel(this.props.cID);
      
    }
  }




  render(){

    return (<div className="channel-detail">
        <header className="channel-header">
          {this.props.channel ? 
          (
            <div className="channel-name-container">
              <p className="hash">#&nbsp;</p>
              <p>{this.props.channel.name}</p>
            </div>
          ) : ("")}
        </header>
        <div className="channel-content">
          <ChatRoom id={this.props.cID} user={this.props.user} />
          <aside className="channel-user-list">
            <div className="user-list-header">
              <h2>USERS</h2>
            </div>
              <UserList cID={this.props.cID} />
          </aside>
        </div>
      </div>
    )
  }
}

export default ChannelDetail;