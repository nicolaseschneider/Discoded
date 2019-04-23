import React from 'react';
import UserList from './server/channels/users/user_list';
import ChatRoom from '../../chat/chatroom';
import VideoCall from '../../chat/WebRTC/videocall';


class DMDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {videoCall: false};
  }

  componentDidMount() {
    this.props.selectChannel(this.props.cID);
    this.props.fetchChannel(this.props.cID).then(this.props.fetchUsers(this.props.cID));
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.cID) {

      this.props.fetchChannel(this.props.cID)
      .then(() => this.props.selectChannel(this.props.cID))
      .then( () => this.props.fetchUsers(this.props.cID));

    }
  }
  parseDM(name) {
    if (this.props.user){
      let find = name.split(' ##$$#aS4#$$## ');
      switch (find[0]) {
        case this.props.user.username:
          return find[1];
        default:
          return find[0];
      }
    }

  }
  joinCall(){
    this.setState({videoCall: true})
  }




  render() {
    if (this.state.videoCall){
      return (<div className="channel-detail">
        <header className="channel-header">
          {this.props.channel ?
            (
              <div className="channel-name-container">
                <div>
                  <p className="hash">#&nbsp;</p>
                  <p>{this.parseDM(this.props.channel.name)}</p>
                </div>
                <i onClick={this.joinCall.bind(this)} className="fas fa-video"></i>
              </div>
            ) : ("")}
        </header>
        <div className="channel-content">
          <VideoCall DMDetail={this} />
          <aside className="channel-user-list">
            <div className="user-list-header">
              <h2>USERS</h2>
            </div>
            <UserList cID={this.props.cID} />
          </aside>
        </div>
      </div>
      ) 
    } else {

      return (<div className="channel-detail">
        <header className="channel-header">
          {this.props.channel ?
            (
              <div className="channel-name-container">
                <div>
                  <p className="hash">#&nbsp;</p>
                  <p>{this.parseDM(this.props.channel.name)}</p>
                </div>
                <i onClick={this.joinCall.bind(this)} className="fas fa-video"></i>
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
}

export default DMDetail;