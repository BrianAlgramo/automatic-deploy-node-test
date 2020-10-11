/*
 * External dependencies
 */
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

/*
 * Init Server
 */
const server: express.Application = express();

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

export default server;
