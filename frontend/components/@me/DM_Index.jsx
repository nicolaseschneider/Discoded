import React from 'react';
import { NavLink } from 'react-router-dom';

class DMIndex extends React.Component{
  componentDidMount(){
    this.props.getDMs();
  }


  render(){
    const channelList = this.props.channels.map(channel =>
        <NavLink to={`/@me/${this.props.uID}/DMs/${channel.id}`}>
          <li key={channel.id}>
              <img src={window.chatIcon} />
              <p className="channel-name">{channel.name}</p>
          </li>
        </NavLink>
    )
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
                {Boolean(channelList) ? (<ul className="DM-list">{channelList}</ul>) : <h1>"xD"</h1>}
            </div>
          </div>
        </div>
        <div className="channel-footer">
          <img src={window.chatIcon} />
          <h1>{this.props.user ? this.props.user.username : ""}</h1> 

        </div>

      </div>
    )
  }
}


export default DMIndex;