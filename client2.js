const { io } = require("socket.io-client");
const matchId = "87007";  
const USER_COUNT = 100;  // Number of users to simulate
 
for (let i = 1; i <= USER_COUNT; i++) {
  const userSocket = io("http://localhost:3302/matches");

  userSocket.on("connect", () => {    
    console.log(`✅ User ${i} connected with ID: ${userSocket.id}`);

    // Join the match room
    userSocket.emit("join-room", matchId);
    console.log(`User ${i} joining match room: ${matchId}`);
  });

  userSocket.on("liveData", (data) => { 
    console.log(`📡 User ${i} received live data:`, data); 
  });

  userSocket.on("redirect", (data) => {      
    console.log(`User ${i} received redirect: ${data.message}`); 
  });
}
