import React from 'react';
import { NavLink } from 'react-router-dom';

class DMIndex extends React.Component{
  componentDidMount(){
    this.props.getUser(this.props.uID).then( () => this.props.getDMs() );
  }
  
  componentWillUnmount(){
    this.props.clear();
  }

  parseDM(name){
    let find = name.split(' ##$$#aS4#$$## ');
    if (this.props.user){
      switch(find[0]){
        case this.props.user.username:
          return find[1];
        default:
          return find[0];
      }
    }
    return ""

  }

  render(){
    const channelList = this.props.channels.map(channel =>
      <NavLink key={channel.id} to={`/@me/${this.props.uID}/DMs/${channel.id}`}>
          <li key={channel.id}>
              <img src={window.chatIcon} />
              <p className="channel-name">{this.parseDM(channel.name)}</p>
          </li>
        </NavLink>)
    return (
      <div className="channel-index-wrapper">
        <div className="channel-index-top">

          <div className="channel-list dm-list">
            <header className="DM-index-header">
              <h2> Your DMs</h2>
            </header>
            <div className='DM-index-content'>
              <div>
                <h2> Direct Messages </h2>
              </div>
              <ul className="DM-list">{channelList}</ul>
            </div>
          </div>
        </div>
        <div className="channel-footer">
          <div>
            <img src={window.chatIcon} />
            <span>
              <h1>{this.props.user ? this.props.user.username : ""}</h1>
              <h2>{this.props.user ? "#" + this.props.user.id + "48" : ""}</h2>
            </span>
          </div>

          <i className="fa fa-cog" aria-hidden="true"></i>

        </div>

      </div>
    )
  }
}


export default DMIndex;