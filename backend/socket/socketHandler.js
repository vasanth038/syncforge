const Room = require("../models/Room");


const userSocketMap = {}; 

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);


    socket.on("join-room", async ({ roomId, username }) => {
      if (!roomId) return;

      try {
        const room = await Room.findOne({ roomId });

        if (!room) {
          socket.emit("error", { message: "Room not found. Please check the ID." });
          return;
        }

        userSocketMap[socket.id] = { username, roomId };
        socket.join(roomId);

        
        const clientsInRoom = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
        

        const usersList = clientsInRoom.map((id) => ({
          socketId: id,
          username: userSocketMap[id]?.username || "Anonymous",
        }));

        io.to(roomId).emit("update-users", usersList);

        socket.emit("code-sync", room.code);
      } catch (err) {
        console.error("join-room error:", err);
      }
    });

    socket.on("code-change", async ({ roomId, code }) => {
      if (!roomId || typeof code !== "string") return;
      socket.to(roomId).emit("code-update", { code, sender: socket.id });
      try {
        await Room.updateOne({ roomId }, { code, lastUpdated: new Date() });
      } catch (err) {}
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      
      const user = userSocketMap[socket.id];
      if (user) {
        const { roomId } = user;
        delete userSocketMap[socket.id];

        
        const clientsLeft = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
        const usersList = clientsLeft.map((id) => ({
          socketId: id,
          username: userSocketMap[id]?.username || "Anonymous",
        }));

      
        io.to(roomId).emit("update-users", usersList);
      }
    });
  });
};

module.exports = socketHandler;