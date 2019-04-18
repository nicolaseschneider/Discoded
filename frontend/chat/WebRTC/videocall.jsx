// import React from 'react';
// import { broadcastData, JOIN_CALL, LEAVE_CALL, EXCHANGE, lightsCamera, ice } from './video_util.jsx'
// import {connect} from 'react-redux'
// import { merge } from 'lodash'
// const msp = state =>({
//     current_user: state.session.currentUser
// })
// class VideoCall extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = 
//                     {
//                         pcPeers: {}, 
//                         localStream: null, 
//                         ice, 
//                     };
        
//     }
//     //ice = ice credentials
//     //pcPeers + localStream are objects

//     // localVideo + remoteVideoContainer are DOM elements

//     componentDidMount(){
//         this.setState(
//                     {
//                         localVideo: document.getElementById("local-video"),
//                         remoteVideoContainer: document.getElementById("remote-video-container")
//                     }
//         );
//         lightsCamera.bind(this)();
//     }

//     joinCall (e){
//         //connect to action cable
//         //switch on broadcasted data.type and decide what to do from there
//         e.preventDefault();
//         const that = this;
//         const me = this.props.current_user;
//         App.cable.subscriptions.create(
//             { channel: "VideoChannel", id: "76"},
//             {
//                 connected: () => {
//                     console.log("connected")
//                     broadcastData({type: JOIN_CALL, from: that.props.current_user, id: "76" });
//                 },
//                 received: data =>{
//                     console.log("received:", data);
//                     if (data.from === me) return;
//                     switch(data.type) {
//                         case JOIN_CALL:
//                             return that.join(data);
//                         case EXCHANGE:
//                             if (data.to !== me) return;
//                             return that.exchange(data);
//                         case LEAVE_CALL:
//                             return that.removeUser(data);
//                         default:
//                             return;
//                     }
//                 },
//             });
        
        
//     }
    
//     leaveCall(e){
//         //disconnect from the action cable
//         e.preventDefault();
//         const pcKeys = Object.keys(this.state.pcPeers);
//         for(let i = 0; i < pcKeys.length; i++){
//             this.state.pcPeers[pcKeys[i]].close();
//         }
//         this.setState({ pcPeers: {} });
//         App.cable.subscriptions.subscriptions = [];
      
//         this.state.remoteVideoContainer.innerHTML = "";
//     }

//     join(data){
//         this.createPC(data.from, true)
//     }
//     removeUser(data){
//         console.log("removing user", data.from);
//         let video = document.getElementById(`remoteVideoContainer+${data.from}`);
//         video && video.remove();

//         let peers = this.state.pcPeers
//         delete peers[data.from]
//         this.setState({ pcPeers: peers });
//     }
//     createPC(userId, isOffer){

//         //create a new instance of a RTCPeerConnection line 92
//         //potentially create an "offer" line 98
//         //exchange SDP line 100
//         //exchange ICE line 108
//         //add the stream line 118
//         //return an instance of peer connection line 134
//         let pc = new RTCPeerConnection(this.state.ice)
//         let oldPeers = this.state.pcPeers
//         let newPeer = {userId: pc};
//         this.setState({pcPeers: merge({},oldPeers,newPeer)});
//         console.log(this.state.localStream)
//         console.log(pc)
//         pc.addStream(this.state.localStream)
//         let that = this;
//         if (isOffer && pc){
//             pc.createOffer().then(offer => {
//                 pc.setLocalDescription(offer);
//                 broadcastData({
//                     type: EXCHANGE,
//                     from: that.props.current_user,
//                     to: userId,
//                     sdp: JSON.stringify(pc.localDescription),
//                     id: "76"
//                 });
//             });
//         }
//         pc.onicecandidate = (e) => {
//             if (e.candidate){
//                 broadcastData({
//                     type: EXCHANGE,
//                     from: that.props.current_user,
//                     to: userId,
//                     sdp: JSON.stringify(e.candidate),
//                     id: "76"
//                 });
//             }
//         }
//         pc.onaddstream = e => {
//             console.log(e.stream)
//             const remoteVid = document.createElement("video");
//             remoteVid.id = `remoteVideoContainer+${userId}`;
//             remoteVid.autoplay = "autoplay";
//             remoteVid.srcObject = e.stream;
//             that.state.remoteVideoContainer.appendChild(remoteVid);
//         };
//         pc.oniceconnectionstatechange = e => {
//             if (pc.iceConnectionState === 'disconnected'){
//                 console.log("Disconnected:", userId);
//                 broadcastData({
//                     type: REMOVE_USER,
//                     from: userId,
//                     id: "76"
//                 });
//             }
//         };
//         return pc;
//     }
//     exchange(data){

//         const that = this
//         let pc;

//         if (!this.state.pcPeers[data.from]){
//             pc = this.createPC(data.from, false);
//         } else {
//             pc = this.state.pcPeers[data.from];
//         }

    
//         if (data.candidate){
//             let candidate = JSON.parse(data.candidate)


//             pc.addIceCandidate(new RTCIceCandidate(candidate))
//             .then(() => {
//                 console.log("Ice candidate added", candidate)}).catch( (errors) => console.log(errors))
//             ;
//         }
        
//         if (data.sdp){
//             const sdp = JSON.parse(data.sdp);


//                 pc.setRemoteDescription(new RTCSessionDescription(sdp))
//                 .then(() => {
//                     if (sdp.type === "offer") {
//                         pc.createAnswer().then(answer => {
//                             console.log('got description')
//                             pc.setLocalDescription(answer)
//                             .then(function (){
//                                 console.log("Sending SDP:", data.from, answer)
    
//                                 console.log(answer.type)
//                                 broadcastData({
//                                     type: EXCHANGE,
//                                     from: that.props.current_user,
//                                     to: data.from,
//                                     sdp: JSON.stringify(pc.localDescription),
//                                     id: "76"
//                                 });
//                             });
                                
//                         }).catch( errors => console.log(errors));
    
//                     }
//                 })


//             ;
//         }
//     }
//     render(){
//         return (
//             <div className='video-call'>
//                 <div id="remote-video-container"></div>
//                     <video id="local-video" autoPlay></video>

//                     <hr />

//                     <button onClick={this.joinCall.bind(this)}>
//                         Join Call
//                     </button>

//                     <button onClick={this.leaveCall.bind(this)}>
//                         Leave Call
//                     </button>
//             </div>
//         )
        
//     }
// }

// export default connect (msp, null)(VideoCall);