const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const schedule = require('node-schedule');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log({socket});
});


const job = schedule.scheduleJob('*/5 * * * * *', function(fireDate){
  // To all connected clients
   io.emit('MESSAGE_ALL_CLIENT_EVENT', {name: "nguyenthai", age: 23});
});


http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
