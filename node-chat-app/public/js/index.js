var socket = io();

   	socket.on('connect',function () {
   		console.log("connected to server");

   		socket.emit('createnewEmail',{
    	to:"kshj@gmail.com",
    	text:"hey I am fine"
    	});
   	});

   	socket.on('disconnect',function () {
   		console.log("disconnected to server");
   	});

   	socket.on('newEmail',function (email) {
   		console.log("new email",email);
   	});

   	 