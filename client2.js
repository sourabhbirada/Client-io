const { io } = require("socket.io-client");

const matchId = "1"; // Match ID as a string, since rooms are stored as strings

// Connect to the "/matches" namespace
const user1Socket = io("http://localhost:3302/matches");

// Wait for connection
user1Socket.on("connect", () => {
  console.log(`Connected to server with ID: ${user1Socket.id}`);

  // Join the match room
  user1Socket.emit("join room", matchId);
  console.log(`Joining match room: ${matchId}`);
});   
 

user1Socket.on("liveData", (data) => {
  console.log("Received Live Data:", data);
});

 
// Listen for confirmation of joining room
user1Socket.on("joinedRoom", (data) => {
  console.log(`✅ Successfully joined: ${data.matchId}`);
});

// Handle disconnects
user1Socket.on("disconnect", () => {
  console.log("❌ Disconnected from server");
});

// Log any errors
user1Socket.on("connect_error", (error) => {
  console.error("Connection error:", error); 
});     