import express from "express";
import { createLogger, transports } from "winston";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({ filename: "combined.log" }),
    ],
});

function logRequest(req: any, res: any, next: any) {
    logger.info(req.url)
    next()
}
server.use(logRequest)

function logError(err: any, req: any, res: any, next: any) {
    logger.error(err)
    next()
}
server.use(logError)

export default server;