const path = require('path');
const express =require('express');
const http = require('http');
const socketIO = require('socket.io');


const publicPath=path.join(__dirname,'../public');

var app = express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('new user connected');
     
    socket.emit('newEmail',{
    	from:"kshitij@gmail.com",
    	text:"hey how are you",
    	createAt:120
    });

    socket.on('createnewEmail',function (email) {
   		console.log("createnew email",email);
   	});

	socket.on('disconnect',()=>{
    console.log("user disconnected to server");
  });
});


server.listen(3000,()=>{
	console.log("server started at port 3000");
})

