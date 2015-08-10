var net = require('net');
var server = net.createServer(function (socket) {
	socket.on('data',function(data){socket.write("server echo:"+data)})	
});
server.listen(8877, "localhost");
console.log("TCP server: 8877 \n");