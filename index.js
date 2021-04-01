const { Socket } = require("dgram");

const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

http.listen(3000, () =>{
    console.log("listening on port 3000")
})

io.on("connection", (socket) => {
    socket.on("update", (body) => {
        console.log("test")
        console.log(body)
        io.sockets.emit("broadcast", body)
    })
})