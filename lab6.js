var net = require('net');
var server = net.createServer(f);
server.listen(8000);

function f(socket)
{
	socket.write('hello\n');
	socket.write('world\n');
	
	socket.on('data', function(data){socket.write(data);});
}
