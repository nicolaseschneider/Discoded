
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
                that.localStream = stream
                that.localVideo.srcObject = stream;
            })
            .catch(logError);
    }

}
// Ice Credentials
export const ice = { 'iceServers': [
    {
        urls: 'turn:numb.viagenie.ca',
        username: 'nicoefschneider@gmail.com',
        credential: 'Gludda113'
    },
    // { urls: 'stun:stun1.l.google.com:19302'},
    { urls: "stun:stun2.l.google.com:19302"}]
}
export const broadcastData = data => {
    fetch("calls", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);