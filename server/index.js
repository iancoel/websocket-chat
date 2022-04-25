const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "http://localhost:3000" } });

app.use(cors());

let allMessages = [];

io.on("connection", (socket) => {
  console.log(`${socket.id} connected`)

  socket.on("message", (data) => {

    allMessages.push(data);

    io.emit('allMessages', allMessages);
  })
});

httpServer.listen(3001);