'use strict';

var http = require('http');

http.createServer(function (request, response) {
  console.log(request.headers);

  // Website you wish to allow to connect
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Request methods you wish to allow
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  response.setHeader('Access-Control-Allow-Headers', 'accept, content-type, mysuperheader');

  response.writeHead(200);
  response.write('Request is received.');
  response.end();
}).listen(8080);
