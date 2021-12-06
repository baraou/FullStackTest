const http = require('http')
const server = http.createServer();
const config = require('./config');

const io = require('socket.io')(server, {
  cors: {
    origin: [
      'http://localhost:3000',
    ],
    methods: ['GET', 'POST'],
  }
});

io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.username && socket.handshake.query.room) {
    socket.username = socket.handshake.query.username;
    socket.room = socket.handshake.query.room;
    next();
  } else {
    return next(new Error('Authentication error'))
  }
})

io.on('connection', (socket) => {
  const socketId = socket.id;
  socket.join(socket.room);
  console.log(socket.username, ' joined room ', socket.room);

  socket.on('message', data => {
    console.log(`message sent from ${socket.username} to ${socket.room}`);
    socket.to(socket.room).emit('message', { username: socket.username, message: data.message });
  });

  socket.on('disconnect', () => console.log('disconnected : ', socketId));
});

server.listen(config.ws.port);
