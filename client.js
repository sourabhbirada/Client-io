const { io } = require("socket.io-client");

const matchId = "87079"; // Match ID as a string, since rooms are stored as strings

// Connect to the "/matches" namespace
const user1Socket = io("http://localhost:3302/matches");
        
// Wait for connecti   on
user1Socket.on("connect", () => {  
  console.log(`Connected to server with ID: ${user1Socket.id}`);
  
 
  user1Socket.emit("join-room", matchId);
  console.log(`Joining match room: ${matchId}`);
});   
 
 
user1Socket.on("liveData", (data) => {
  try {
    console.log("Received Live Data:", data);
  } catch (error) {
    console.error("Error handling liveData event:", error);
  }
});
