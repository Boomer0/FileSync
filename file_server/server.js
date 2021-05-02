const cfg = require("./Server_conf.json");
const http = require("http");
const fs = require("fs");

var stream = fs.createReadStream("test.txt");
stream.on("data", (data) => {
    var chunk = data.toString();

    console.log(chunk);

});
const hostname = cfg.fileServer.hostname;
const port = cfg.fileServer.port;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end(stream);
});

server.listen(port, () => {
    console.log(`Server is running at ${hostname}:${port}`);
});