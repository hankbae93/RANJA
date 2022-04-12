const SocketIO = require("socket.io");

module.exports = (server, app) => {
	const io = SocketIO(server, {
		path: "/socket.io",
		cors: "http://localhost:3000",
		// cors: "http://www.ranja.o-r.kr",
	});
	app.set("io", io);

	const room = io.of("/room");
	const chat = io.of("/chat");

	room.on("connection", (socket) => {
		const req = socket.request;
		const username = req._query.username;

		socket.on("disconnect", () => {});
	});

	chat.on("connection", (socket) => {
		const req = socket.request;
		const roomId = req._query.roomId;
		socket.join(roomId);

		socket.on("join", (data) => {
			socket.join(data.room);
		});

		socket.on("disconnect", () => {
			socket.leave(roomId);
		});
	});
};
