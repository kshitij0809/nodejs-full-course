var socket = io();

   	socket.on('connect',function () {
   		console.log("connected to server");

   		socket.emit('createnewMessage',{
    	to:"kshj@gmail.com",
    	text:"hey I am fine"
    	});
   	});

   	socket.on('disconnect',function () {
   		console.log("disconnected to server");
   	});

   	socket.on('message',(message) =>{
   		console.log("new message",message);
   	});

   	 