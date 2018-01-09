
http = require('http');

http.createServer(function(request, response){
	//set HTTP header
	//HTTP status: 200 //ok
	//Content Type: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, world!');
}).listen(3000);

console.log('successfully open server');
