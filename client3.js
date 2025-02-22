const { io } = require("socket.io-client");
const matchId = "87005"
     
const user1Socket = io("http://localhost:3302/matches");
             
// Step 3: Handle WebSocket events   
user1Socket.on("connect", () => {   
  console.log(`✅ Connected to WebSocket with ID: ${user1Socket.id}`); 
  
  // Join the match room 
  user1Socket.emit("join-room", matchId);
  console.log(`Joining match room: ${matchId}`);  
});    

user1Socket.on("liveData", (data) => {  
  console.log("📡 Received Live Data:", data);
  if(data.matchstatu === "end"){
    console.log("match ended redirect to home page")
  }
});


user1Socket.on("redirect", (data) => {       
  console.log(data.message);    
  // window.location.href = "/"; // Replace "/" with your home page URL
});     