
var http = require('http');
var URL = require('url');

database = { "1" : "Hello, world!", "2" : "Lorem Ipsum"};

handler = function(req, res) {
	url = URL.parse(req.url);
	if (req.method == 'GET') {
		path = url.pathname.split('/');
		resources = path[path.length - 2];
		id = path[path.length - 1];
		if (resources == 'messages') {
			message = database[id];
			var body = { "message" : message };
			res.writeHead(200, { 'Content-Type' : 'application/json' });
			res.end(JSON.stringify(body));
		}
	}
};

host = '127.0.0.1';
port = 8080;

http.createServer(handler).listen(port, host);
console.log('Server running at http://' + host + ':' + port + '/');

