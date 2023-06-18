const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());

const io = new Server(server);
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hell its working...");
})

io.on('connection', (socket) => {
  console.log("a user connected");

  socket.on("join", () => {
    console.log("join user");
  })

  socket.on('disconnect', () => {
    console.log("user disconnected");
  })
})

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})