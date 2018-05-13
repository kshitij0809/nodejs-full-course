const path = require('path');
const express =require('express');
const http = require('http');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath=path.join(__dirname,'../public');

var app = express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
	console.log('new user connected');
     
    socket.emit('newMessage',generateMessage('admin','welcome to chat app'));

	socket.broadcast.emit('newMessage',generateMessage('admin','new user joined'));
    
    socket.on('createnewMessage',(message)=> {
   		console.log("createnew message",message);

   		io.emit('newMessage',generateMessage(message.from,message.text));

   		// socket.broadcast.emit('newMessage',{
   		// 	from:message.from,
   		// 	text:message.text,
   		// 	createAt:new Date().getTime()
   		// })
   	});

	socket.on('disconnect',()=>{
    console.log("user disconnected to server");
  });
});


server.listen(3000,()=>{
	console.log("server started at port 3000");
})

//socket.emit('createnewMessage',{from:'@dsd',text:'ajsh auisdhi cb'})