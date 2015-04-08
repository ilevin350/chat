var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.set('origins', '*:*');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// Listen for the connection event and log it to the console
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});