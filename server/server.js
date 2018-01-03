const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from : 'vyshu',
        text : 'Hi',
        createdAt : '234'
    });
    socket.on('createMessage', (message) => {
        console.log(message);
    });
    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
