import express from 'express';
import routerUsers from './routes/users.routes';
import routerTurns from './routes/turns.routes';

const server = express();

server.use(express.json());
server.use(routerUsers);
server.use(routerTurns);

export default server;