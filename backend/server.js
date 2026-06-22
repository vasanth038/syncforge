require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const connectDB = require("./config/db");
const socketHandler = require("./socket/socketHandler");

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL, 
    methods: ["GET", "POST"]
  },
});

socketHandler(io);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log("Server started at port", PORT);
});