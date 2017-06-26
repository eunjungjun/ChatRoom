var socket = io(); //We can do this because we imported socket.io in the html

$("form").submit(function() {
	//socket.emit(event, data) Send the server the event name, send the server the data
	socket.emit('chat message', $("#messageField").val());
	$("#messageField").val("");
	return false;
});

//socket.on(event, callback function) callback gets run when event happens
socket.on('chat message', function(msg) {
	$("#messages").append($("<li>").text(msg));
})