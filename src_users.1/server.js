const path = require('path')
const express = require('express')

var app = express();
const publicPath = express.static(path.join(__dirname, '../public'))

app.use('/', publicPath)

var host = "0.0.0.0";
var port = process.env.PORT;
var server = app.listen(port, host, function() {
    console.log('app listening at http://%s:%s', host, port);
});