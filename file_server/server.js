const fs = require("fs");
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer)

const conf = require("./server_conf.json");

io.on("connect", (socket) => {
    console.log("User connected");

    let stream = fs.createReadStream("test.txt");
    stream.on("data", (chunk) => {
        socket.emit("FileSend", chunk);
        socket.disconnect();
    });
});

const port = conf.server.port;
httpServer.listen(port);

