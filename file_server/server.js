const app = require('express')();
const fs = require("fs");

const conf = require("./server_conf.json");

const hostname = conf.server.hostname;
const port = conf.server.port;


//setup server

app.get('/', (req, res) => {
    let stream = fs.createReadStream("test.txt");
    stream.on("data", (chunk) => {
        res.send(chunk);
    });
});

app.listen(port, (req, res) => {
    console.log(`Server running on ${hostname}:${port}`);
});
