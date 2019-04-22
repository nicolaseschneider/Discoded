
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
                audio: false,
                video: true
            }
        ).then(stream => {
                that.localStream = stream
                that.localVideo.srcObject = stream;
            })
            .catch(logError);
    }

}
// Ice Credentials
export const ice = {
    iceServers: ['turn:192.158.29.39:3478?transport=tcp', "stun:stun2.l.google.com:19302"],
    username: '28224511:1379330808',
    credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=' } 

export const broadcastData = data => {
    fetch("calls", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);