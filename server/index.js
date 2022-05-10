const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const routes = require('./routes/routes');
const db = require('./database/db');

const PORT = 3001;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000' } });

//  CORS
app.use(cors());

//  DATABASE
db
  .sync()
  // .then(() => console.log(`Database connected: ${process.env.DB_NAME}`));
  .then({ force: true });

//  ROUTES
app.use(express.json());
app.use(routes);

//  WEBSOCKETS CONFIGS
// eslint-disable-next-line prefer-const
let allMessages = [];

io.on('connection', (socket) => {
  console.log(`${socket.id} connected`);

  socket.on('message', (data) => {
    allMessages.push(data);

    io.emit('allMessages', allMessages);
  });
});

httpServer.listen(PORT, () => console.log(`Server running in port ${PORT}`));
