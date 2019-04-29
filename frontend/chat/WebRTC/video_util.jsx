
// Broadcast Types
export const JOIN_CALL = "JOIN_CALL";
export const EXCHANGE = "EXCHANGE";
export const LEAVE_CALL = "LEAVE_CALL"; 
//get the local video stream
// Ice Credentials
export const ice = { 
    iceServers: [{ urls: ["stun:u2.xirsys.com"] }, 
    { username: "mqa5vWL0jQtatIq6R0su1GH4mLA2M2hTpVHPUWX7lsj9shnsSlJLr-eoTCiBjbfbAAAAAFy_duJLYXJhdGU=", 
    credential: "391dcc2a-6607-11e9-b0e6-6ea37c7028db", 
    urls: ["turn:u2.xirsys.com:80?transport=udp", 
    "turn:u2.xirsys.com:3478?transport=udp", 
    "turn:u2.xirsys.com:80?transport=tcp", 
    "turn:u2.xirsys.com:3478?transport=tcp", 
    "turns:u2.xirsys.com:443?transport=tcp", 
    "turns:u2.xirsys.com:5349?transport=tcp"] }]
}
export const broadcastData = data => {
    fetch("calls", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);