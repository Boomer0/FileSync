const cfg = require("./config/settings.json");
const http = require("http");
const fs = require("fs");

const hostname = cfg.fileServer.hostname;
const port = cfg.fileServer.port;

const fileBuffer = fs.readFileSync("./Files/Node Questions.txt");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': Buffer.byteLength(fileBuffer)
    })
    res.end(fileBuffer);
});

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});