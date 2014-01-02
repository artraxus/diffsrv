var express = require('express');
var app = express();

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.configure(function () {
    app.use(express.bodyParser());
});

app.get('/', function (request, response) {
    console.log('home called');
    response.end('hello world');
});

app.listen(port, ipaddr);
console.log('Server running...');