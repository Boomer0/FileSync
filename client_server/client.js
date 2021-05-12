const fs = require("fs");
const io = require("socket.io-client");

const conf = require("./client_conf.json");

const hostname = conf.connections.hostname;
const port = conf.connections.port;
const socket = io(hostname + port);



socket.on('FileSend', (chunk) => {
    data = chunk.toString('utf8');
    console.log(data);
})