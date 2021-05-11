const express = require('express');
const socket = require('socket.io');
const fs = require("fs");

const conf = require("./server_conf.json");

const hostname = conf.server.hostname;
const port = conf.server.port;


//setup server
const app = express();

const server = app.listen(port, (req, res) => {
    console.log(`Server running on ${hostname}:${port}`);
});

server.get('/', (req, res) => {
    res.sendFile('test.txt', {root: '.'});
});

//setup socket
const io = socket(server);

io.on('connection', (socket) => {
    console.log("User connected");

    socket.on('disconnect', () => {
        console.log("User disconnected");
    })
})



// var stream = fs.createReadStream("test.txt");

// stream.on("data", (data) => {
//     var chunk = data.toString();

//     // console.log(chunk);
// });