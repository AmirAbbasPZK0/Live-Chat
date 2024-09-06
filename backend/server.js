const http = require("http")

const socketIO = require("socket.io")

const server = http.createServer()

const io = socketIO(server , {
    cors : {
        origin : "*"
    }
})

io.on("connection" , socket => {
    socket.on("message" , (data) => {
        io.emit("message" , {
            userId : socket.id,
            message : data
        })
    })
})

server.listen(5000 , () => {
    console.log("Server is Running on Port 5000")
})