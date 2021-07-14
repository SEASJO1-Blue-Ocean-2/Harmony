const express = require('express');
const app = express();
const PORT = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);
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
  res.redirect(`/${uuidV4()}`);
});

app.get('/:roomId', (req, res)=>{
  res.render('index', { roomId: req.params.roomId });
});

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId, userName) => {
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

server.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});