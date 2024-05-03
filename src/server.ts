import express from 'express';
import router from './routes/users.routes';

const server = express();

server.use(express.json());
server.use(router);

export default server;