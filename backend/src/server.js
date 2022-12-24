var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res) {
  res.send('root page');
});

app.get('/api', function(req, res){
  res.send('api test');
});

app.listen(3003, function() {
  console.log('server on ');
  return 'server on';
});