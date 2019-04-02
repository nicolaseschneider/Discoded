import React from 'react';
import ChatRoom from '../../../../chat/chatroom';
import {withRouter} from 'react-router-dom';

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
      
        <ChatRoom id={this.props.cID} user={this.props.user} />
      </div>
    )
  }
}

export default ChannelDetail;