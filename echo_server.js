var net = require('net');
var server = net.createServer(function(socket){
	socket.pipe(socket);
});

server.listen(8080, "127.0.0.1"); 

console.log("Server listening on port 80808");
