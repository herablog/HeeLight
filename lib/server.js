var express = require('express');
var path = require('path');
var io = require('socket.io');

var baseDir = path.join(__dirname, '..');

var app = module.exports = express.createServer();
app.configure(function() {
  app.use(express.static(baseDir + '/public'));
});

app.listen(3000);

// Socket I.O
var socket = io.listen(app);

// Connect
socket.on('connection', function (socket) {
  socket.on('hee', function(){
    console.log('hee');
    // socket.broadcast.emit('hee');
    socket.emit('soundPlay');
    socket.broadcast.emit('soundPlay');
  });
});
