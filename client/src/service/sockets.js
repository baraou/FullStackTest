import io from 'socket.io-client';

export function init(username, room) {
  const socket = io('http://localhost:3003', {
    query: {
      username,
      room,
    },
  });
  return socket;
}
