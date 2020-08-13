const express = require("express");
const socket = require("socket.io");
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

app.post('/',urlencodedParser,(req,res)=>{
    console.log(req.body.userid);
    var userid = req.body.userid!=undefined ? req.body.userid:0;
    var jobid = req.body.jobid!=undefined ? req.body.jobid:0;
    // console.log(res.body);
    res.send("Node server is running. !!!");
    
    // createdSocket.to(req.)
    if(userid!=0)
    io.in(userid).emit("notify",{'jobid':jobid});
    else
    io.emit("notify",{'jobid':jobid});
    
});
// Socket setup
const io = socket(server);
var createdSocket;
io.on("connection", function (usersocket) {
  console.log("Made socket connection");
  
  usersocket.emit("msg","my message data test");
  usersocket.on('join',function(data){
      console.log('data ',data);
    usersocket.join(data);
  });
//   createdSocket = usersocket;
});