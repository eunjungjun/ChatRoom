var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http); //IO is going to be how we communicate between clients

//You can think of IO as being the server, passing data between two clients

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html")
});

//Use express to serve up static files(css, js, other htmls besides index) so that our page can be pretty)
app.use(express.static(__dirname + "/public"));

//We are going to handle the socket events here
io.on('connection', function(socket) {
	socket.on('chat message', function(msg) {
		io.emit('chat message', msg);
	});
});

//Tell the server where it should run on the host
http.listen(process.env.PORT || 3000, function() {
	console.log("listening on *:3000");
});