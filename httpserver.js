var net = require('net');
// var sys = require('sys');

// Setup a tcp server
var server = net.createServer(function (socket) {
	console.log("socket.write('Echo server\r\n');")
	socket.write('Echo server\r\n');
	socket.pipe(socket);
});

// Fire up the server bound to port 7000 on localhost
server.listen(8877, "localhost");

// Put a friendly message on the terminal
console.log("TCP server listening on port 8877 at localhost.");