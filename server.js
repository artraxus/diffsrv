var express = require('express');
var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || 8080;
var ipaddr = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || "127.0.0.1";

console.log(port);
console.log(ipaddr);

app.configure(function () {
    app.use(express.bodyParser());
});

app.get('/', function (request, response) {
    console.log('home called');
    response.end('hello world');
});

app.listen(port, ipaddr);
console.log('Server running...');