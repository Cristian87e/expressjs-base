import http from 'http';

import expressServerApp from './express-server';

http.Server(expressServerApp);

// var io = require('socket.io')(server);

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
