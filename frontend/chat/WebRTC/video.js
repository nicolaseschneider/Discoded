

// Broadcast Types
export const JOIN_CALL = "JOIN_CALL";
export const EXCHANGE = "EXCHANGE";
export const LEAVE_CALL = "LEAVE_CALL";

// DOM Elements
let currentUser;
let localVideo;
let remoteVideoContainer;

// Objects
let pcPeers = {};
let localstream;

window.onload = () => {
    currentUser = document.getElementById("current-user").innerHTML;
    localVideo = document.getElementById("local-video");
    remoteVideoContainer = document.getElementById("remote-video-container");
};

// Ice Credentials
const ice = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

// Initialize user's own video
document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        navigator.mediaDevices
            .getUserMedia({
                audio: false,
                video: true
            })
            .then(stream => {
                localstream = stream;
                localVideo.srcObject = stream;
                localVideo.muted = true;
            })
            .catch(logError);
    }
};

export const lightsCamera = () => {
    let that = this
    document.onreadystatechange = () => {
        if (document.readyState === "interactive") {
            navigator.mediaDevices.getUserMedia(
                {
                    audio: true,
                    video: true
                }
            ).then(stream => {
                    that.setState({localstream: stream})
                    localVideo.srcObject = stream;
                })
                .catch(logError);
        }
    };
}


const joinRoom = data => {
    // create a peerConnection to join a room
};

const removeUser = data => {
    // remove a user from a room
};

const createPC = (userId, isOffer) => {
    // new instance of RTCPeerConnection
    // potentially create an "offer"
    // exchange SDP
    // exchange ICE
    // add stream
    // returns instance of peer connection
};

const exchange = data => {
    // add ice candidates
    // sets remote and local description
    // creates answer to sdp offer
};

export const broadcastData = data => {
    fetch("sessions", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);