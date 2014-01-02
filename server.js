var express = require('express');
var app = express();

app.configure(function () {
    app.use(express.bodyParser());
});

app.get('/', function (request, response) {
    console.log('home called');
    response.end('hello world');
});

app.listen(8080);
console.log('Server running...');