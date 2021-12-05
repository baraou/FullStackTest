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

io.on('connection', (socket) => {
  const socketId = socket.id;
  console.log('connected : ', socketId);

  if (socket.handshake.query) {
    console.log('joined room default chat');
    socket.join('defaultChat');
  }

  socket.on('message', data => {
    console.log(`message sent from ${socketId} to ${data.room}`);
  });

  socket.on('disconnect', () => console.log('disconnected : ', socketId));
});

server.listen(config.ws.port);
