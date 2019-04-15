import React from 'react';
import {NavLink} from 'react-router-dom';

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

    componentWillUnmount(){
        this.props.clear();
    }


    render(){
        const channelList = this.props.channels.map(channel =>
                <NavLink key={channel.id} to={`/@me/${this.props.uID}/${this.props.sID}/${channel.id}`}>
                    <li>
                        #&nbsp;&nbsp;<p className="channel-name">{channel.name}</p>
                    </li> 
                </NavLink>
            )

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
                        { Boolean(channelList) ? (<ul className="channel-index-ul">{channelList}</ul>) : <h1>"xD"</h1> }
                    </div>
                </div>
                <div className="channel-footer">
                    <div>
                        <img src={window.chatIcon} />
                        <span>
                            <h1>{this.props.user ? this.props.user.username : ""}</h1>
                            <h2>{this.props.user ? "#" + this.props.user.id +"48": ""}</h2>
                        </span>
                    </div>

                    <i className="fa fa-cog" aria-hidden="true"></i>

                </div>
     
            </div>
        )
    }
};
export default ChannelIndex;