import socketIO from 'socket.io';

export const initializeSockets = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', data => console.log(data));
    socket.on('msg', data => console.log(data));
  });
};

export default {
  initializeSockets,
};
