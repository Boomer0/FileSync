const fs = require("fs");
const http = require("http");

const conf = require("./client_conf.json");

const hostname = conf.connections.hostname;
const port = conf.connections.port;


http.get(hostname + port, (res) => {
    res.on('data', (res) => {
        data = res.toString('utf8');
        console.log(data);
    })
})
