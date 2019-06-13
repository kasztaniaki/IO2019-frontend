var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var app = express()
const dotenv = require('dotenv');
dotenv.config();
app.use(serveStatic(path.join(__dirname, '/dist')))
console.log(app.get('env'))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
