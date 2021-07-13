const express = require('express');
const app = express();
const PORT = 3000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/./client/dist');
app.use("/", express.static('./client/dist/'));

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
 })



server.listen(PORT, function() {
  console.log(`Server listening at http://localhost:${PORT}`);
});