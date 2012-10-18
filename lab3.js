var http = require('http');
var server = http.createServer(f);
server.listen(8000);

function f(req, res)
{
	res.writeHead({'content-type':'text/plain'});
	res.end('hello world\n');
}
