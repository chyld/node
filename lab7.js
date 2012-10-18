var net = require('net');
var server = net.createServer(f);
server.listen(8000);

var sockets = [];

function f(socket)
{
	sockets.push(socket);
	
	socket.on('data', function(data){
		for(var i = 0; i < sockets.length; i++)
			if(socket != sockets[i])
				sockets[i].write(data);
	});
	
	socket.on('end', function(){
		for(var i = 0; i < sockets.length; i++)
			if(socket == sockets[i])
				sockets.splice(i, 1);
	});
}
