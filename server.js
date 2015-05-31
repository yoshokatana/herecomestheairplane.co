'use strict';
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  hostname = process.env.HOSTNAME || 'localhost',
  port = process.env.PORT || 3000,
  publicDir = __dirname + '/build';

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

console.log('Simple static server showing %s listening at http://%s:%s', publicDir, hostname, port);
app.listen(port, hostname);
