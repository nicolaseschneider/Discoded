
// Broadcast Types
export const JOIN_CALL = "JOIN_CALL";
export const EXCHANGE = "EXCHANGE";
export const LEAVE_CALL = "LEAVE_CALL"; 
//get the local video stream
// Ice Credentials
export const ice = { 
    iceServers: [{ urls: ["stun:u3.xirsys.com"] }, { username: "53grIOQ2r6pyr79jObt9ha9KIfI4cPjpsxgVEOQYIfCNo6tRVum70_RL2e5gTPkWAAAAAFzCGRdEaW5nb01hbjg5", credential: "15769ebc-6799-11e9-a1f7-86b7e87eee77", urls: ["turn:u3.xirsys.com:80?transport=udp", "turn:u3.xirsys.com:3478?transport=udp", "turn:u3.xirsys.com:80?transport=tcp", "turn:u3.xirsys.com:3478?transport=tcp", "turns:u3.xirsys.com:443?transport=tcp", "turns:u3.xirsys.com:5349?transport=tcp"] }]
}
export const broadcastData = data => {
    fetch("calls", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" }
    });
};

const logError = error => console.warn("Whoops! Error:", error);