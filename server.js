const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const server = require('http').Server(app);
const io = require('socket.io')(server);
const rooms = {};

app.set('view engine', 'ejs');
app.set('views', __dirname + '/./client/dist');
app.use('/', express.static('./client/dist'));

app.get('/', (req, res)=>{
  res.render('index', { roomId: req.params.roomId });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client', '/dist', '/index.ejs'));
});

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId, socketId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.to(roomId).emit('user-connected', userId);
    if (rooms[roomId]) {
      io.to(socketId).emit('current-room', rooms[roomId]);
    }
    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId);
    });
  });
});

app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});