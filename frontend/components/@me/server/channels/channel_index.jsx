import React from 'react';
import ChatRoom from '../../../../chat/chatroom';



class ChannelIndex extends React.Component {
    componentDidMount(){
        
            this.props.selectServer(this.props.sID);
            this.props.receiveChannels(this.props.sID);

    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.serverId !== prevProps.sID){
            this.props.selectServer(this.props.sID);
            this.props.receiveChannels(this.props.sID);
        }
    }


    render(){

        const channellist = this.props.channels.map( (channel) => (
            <li key={channel.id}>
                <p>{channel.name}</p>
            </li>
            )
        )

        return (
            <div className="channel-index-wrapper">
                { Boolean(channellist) ? (<ul>{channellist}</ul>) : <h1>"xD"</h1> }
                <ChatRoom />
            </div>
        )
    }
};
export default ChannelIndex;