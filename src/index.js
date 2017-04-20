import http from 'http';

import { PORT } from './config';
import expressServerApp from './express-server';
import { initializeSockets } from './sockets';

const server = http.Server(expressServerApp);

server.listen(PORT);

initializeSockets(server);
