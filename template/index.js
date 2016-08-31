require('http').createServer(function (request, response) {
    console.log('request.url: ' + request.url);
    response.end('Hello, world!\n' + request.url);
}).listen(3000);
