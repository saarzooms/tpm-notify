const io = require("socket.io-client");
 
const socket = io.connect('https://tpm-notify.herokuapp.com:5000');
socket.on('connect', function(){
    console.log('connected with client');
    socket.emit('join','1234');
});
socket.on("msg", function (data) {
    console.log("msg received",data);
  });
  socket.on("notify", function (data) {
    console.log("msg received",data);
  });