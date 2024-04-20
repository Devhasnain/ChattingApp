const socketIO = require('socket.io');

let io;

function initSocket(server) {
  io = socketIO(server);
  return io;
}

function getIO() {
  if (!io) {
    throw new Error('Socket.IO has not been initialized');
  }
  return io;
}

module.exports = {
  initSocket,
  getIO
};
