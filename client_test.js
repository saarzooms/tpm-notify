const io = require("socket.io-client");
 
const socket = io.connect('http://localhost:3000');
socket.on('connect', function(){
    console.log('connected with client');
    socket.emit('join',{'device_id':'e204cdd5eea274f7'});
});
socket.on("msg", function (data) {
    console.log("msg received",data);
  });
  socket.on("notify", function (data) {
    console.log("msg received",data);
  });