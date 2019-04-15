
import React from 'react';
// Broadcast Types
export const JOIN_CALL = "JOIN_CALL";
export const EXCHANGE = "EXCHANGE";
export const LEAVE_CALL = "LEAVE_CALL";
//get the local video stream
export const lightsCamera = function(){
    const that = this

    if (document.readyState === "interactive") {
        navigator.mediaDevices.getUserMedia(
            {
                audio: true,
                video: true
            }
        ).then(stream => {
                that.setState({localStream: stream})
                that.state.localVideo.srcObject = stream;
            })
            .catch(logError);
    }

}
// Ice Credentials
export const ice = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

const handleLeaveSession = () => {
    for (user in pcPeers) {
        pcPeers[user].close();
    }
    pcPeers = {};

    App.session.unsubscribe();

    remoteVideoContainer.innerHTML = "";

    broadcastData({
        type: REMOVE_USER,
        from: currentUser
    });
};

const createPC = (userId, isOffer) => {
    let pc = new RTCPeerConnection(ice);
    pcPeers[userId] = pc;
    pc.addStream(localstream);

    isOffer &&
        pc
            .createOffer()
            .then(offer => {
                pc.setLocalDescription(offer);
                broadcastData({
                    type: EXCHANGE,
                    from: currentUser,
                    to: userId,
                    sdp: JSON.stringify(pc.localDescription)
                });
            })
            .catch(logError);

    pc.onicecandidate = event => {
        event.candidate &&
            broadcastData({
                type: EXCHANGE,
                from: currentUser,
                to: userId,
                candidate: JSON.stringify(event.candidate)
            });
    };

    pc.onaddstream = event => {
        const element = document.createElement("video");
        element.id = `remoteVideoContainer+${userId}`;
        element.autoplay = "autoplay";
        element.srcObject = event.stream;
        remoteVideoContainer.appendChild(element);
    };

    pc.oniceconnectionstatechange = event => {
        if (pc.iceConnectionState == "disconnected") {
            console.log("Disconnected:", userId);
            broadcastData({
                type: REMOVE_USER,
                from: userId
            });
        }
    };

    return pc;
};

const exchange = data => {
    let pc;

    if (!pcPeers[data.from]) {
        pc = createPC(data.from, false);
    } else {
        pc = pcPeers[data.from];
    }

    if (data.candidate) {
        pc
            .addIceCandidate(new RTCIceCandidate(JSON.parse(data.candidate)))
            .then(() => console.log("Ice candidate added"))
            .catch(logError);
    }

    if (data.sdp) {
        sdp = JSON.parse(data.sdp);
        pc
            .setRemoteDescription(new RTCSessionDescription(sdp))
            .then(() => {
                if (sdp.type === "offer") {
                    pc.createAnswer().then(answer => {
                        pc.setLocalDescription(answer);
                        broadcastData({
                            type: EXCHANGE,
                            from: currentUser,
                            to: data.from,
                            sdp: JSON.stringify(pc.localDescription)
                        });
                    });
                }
            })
            .catch(logError);
    }
};

export const broadcastData = data => {
    fetch("calls", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);