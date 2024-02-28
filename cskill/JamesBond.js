var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200,{'content-type':'text/html'}); //write a response to the client
  res.end('Hellow World!'); //end the response
}).listen(8080); //the server object listens on port 8080
