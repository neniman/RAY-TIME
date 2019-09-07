import * as express from "express";
import * as socketio from "socket.io";
import * as path from "path";
import * as http from 'http';

const app = express();

let server = new http.Server(app);
/* set up socket.io and bind it to our
 * http server.
 */
let io = socketio(server);

app.use(express.static('../frontend/ray-time/dist'))

/* whenever a user connects on port 3000 via
   a websocket, log that a user has connected
 */
io.on("connection", function(socket: socketio.Socket) {
	console.log("a user connected");
	// whenever we receive a 'message' we log it out
	socket.on("new delay", (time) =>{
		console.log("new delay", time);
		socket.broadcast.emit("appointment update", time);
	});
	socket.on("new patient", (data) =>{
		console.log("new patient", data);
		socket.broadcast.emit("new patient", data);
	});
});

server.listen(3010, function() {
	console.log("listening on *:3010");
});
