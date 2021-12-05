import io from 'socket.io-client';

export let socket = null;
// export const getSocket = () => socket;

export function init(username, room) {
  if (socket) return socket;
  socket = io('http://localhost:3003', {
    query: {
      username,
      room,
    },
  });

  socket.on('connect', () => {
    console.log('connected', socket.id);
  });
  socket.on('connect_error', () => {
    console.log('connect error');
  });
  socket.on('disconnect', () => console.log('disconnected'));
  return socket;
}
