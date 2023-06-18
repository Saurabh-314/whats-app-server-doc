const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const bodyParser = require("body-parser")
const Connection = require("./database/db.js");
const Routes = require("./routes/Routes.js");

const io = new Server(server);
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/', Routes);


// Database connection
Connection();

io.on('connection', (socket) => {
  console.log("a user connected");

  socket.on("addUser", (userData) => {
    socket.join(userData.sub);
  })

  //send message
  socket.on('sendMessage', (data) => {
    io.to(data.receiverId).emit('getMessage', data)
  })

  //disconnect
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})

server.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
})