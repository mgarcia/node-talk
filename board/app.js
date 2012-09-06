var app		= require('http').createServer(handler),
	io		= require('socket.io').listen(app),
	file	= require('node-static'); 

var fileServer = new file.Server('./');


function handler (request, response) {

	request.addListener('end', function () {
		fileServer.serve(request, response);
	});
}


io.sockets.on('connection', function (socket) {

	socket.on('message', function (data) {

		socket.broadcast.emit('newmsg', data);
		console.log("new msg:" + data);
	});
});

app.listen(8000);
