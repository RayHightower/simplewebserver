// Sample web server from http://nodejs.org, slightly modified.

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World. OpenROV runs Node.js!');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

