/*
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const {v4: uuidV4} = require('uuid');
const rooms = {};

app.set('view engine', 'ejs');
app.set('views', __dirname + '/./client/dist');
app.use("/", express.static('./client/dist/'));

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.get('/', (req, res)=>{
  res.render('index', { roomId: req.params.roomId });
});

server.listen(3000);
app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});
*/

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use('/', express.static('./client/dist'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client', '/dist', '/index.html'));
});

app.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
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