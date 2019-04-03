import React from 'react';
import {NavLink} from 'react-router-dom';
import { userInfo } from 'os';

class ChannelIndex extends React.Component {
    componentDidMount(){
        
            this.props.selectServer(this.props.sID);
            this.props.receiveChannels(this.props.sID);
            this.props.getUser(this.props.uID);

    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.serverId !== prevProps.sID){
            this.props.selectServer(this.props.sID);
            this.props.receiveChannels(this.props.sID);
        }
    }


    render(){
        const channelList = this.props.channels.map(channel =>
            (<li draggable="true" key={channel.id}>
                <NavLink to={`/@me/${this.props.uID}/${this.props.sID}/${channel.id}`}>
                    #&nbsp;&nbsp;<p className="channel-name">{channel.name}</p>
                </NavLink>
            </li>) )

        return (
            <div className="channel-index-wrapper">
                <div className="channel-index-top">

                    <header  className="channel-index-header">
                        {this.props.server ? <h2>
                            <p>{this.props.server.name }</p>
                            <div onClick={this.props.openInviteModal}><i className="fas fa-user-plus"></i></div>
                        </h2>
                            : ""}
                    </header>
                    <div className="server-invite-splash"> 

                    </div>

                    <div className="channel-list">
                        <div>
                            <h2> Text Channels </h2>
                            <i onClick={this.props.openNewChannelModal} className="fas fa-plus"></i>
                        </div>
                        { Boolean(channelList) ? (<ul>{channelList}</ul>) : <h1>"xD"</h1> }
                    </div>
                </div>
                <div className="channel-footer">
                    <img src={window.chatIcon} />
                    <h1>{this.props.user ? this.props.user.username : ""}</h1>

                </div>
     
            </div>
        )
    }
};
export default ChannelIndex;