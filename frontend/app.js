const socket = io("http://localhost:5000");

let message = document.getElementById("message")
let list = document.getElementById("list")
let button = document.getElementById("btn")


socket.on("connect" , () => {

    button.addEventListener("click" , () => {
        socket.emit("message" , message.value)
        message.value = ""
    })

    socket.on("message" , (data) => {
        
        if(socket.id == data.userId){
            list.insertAdjacentHTML("beforeend" , `<li class="own">${data.message}</li>`)
        }else{
            list.insertAdjacentHTML("beforeend" , `<li class="others">${data.message}</li>`)
        }
    })
})