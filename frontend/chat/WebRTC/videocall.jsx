import React from 'react';
import { broadcastData, JOIN_CALL, LEAVE_CALL, EXCHANGE, lightsCamera } from './video'
import {connect} from 'react-redux'
const msp = state =>({
    current_user: state.session.currentUser
})
class VideoCall extends React.Component{
    constructor(props){
        super(props)
        this.state = {pcPeers: {}, localStream: null }
        lightsCamera.bind(this)();
    }

    joinCall(e){
        e.preventDefault();
        const me = this.props.currentUser
        let that = this
        App.cable.subscriptions.create(
            {channel: "VideoChannel", id: "76"},
            {
                connected: () => {
                    console.log("connected")
                    broadcastData({type: "initiateConnection", id: "76" });
                },
                received: data =>{
                    console.log("received:", data);
                    if (data.from === me) return;
                    switch(data.type) {
                        case JOIN_CALL:
                            return that.join(data);
                        case EXCHANGE:
                            if (data.to !== me) return;
                            return exchange(data);
                        case LEAVE_CALL:
                            return removeUser(data);
                        default:
                            return;
                    }
                },
                leaveCall: function () { App.cable.subscriptions.remove(this); }
            });
    }
    leaveCall(e){
        e.preventDefault();
    }

    render(){
        return (
            <div className='video-call'>
                <div id="remote-video-container"></div>
                    <video id="local-video" autoPlay></video>

                    <hr />

                    <button onClick={this.joinCall.bind(this)}>
                        Join Call
                    </button>

                    <button >
                        Leave Call
                    </button>
            </div>
        )
        
    }
}

export default VideoCall;