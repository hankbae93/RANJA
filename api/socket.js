const SocketIO = require("socket.io");

module.exports = (server, app) => {
	const io = SocketIO(server, {
		path: "/socket.io",
		cors: "http://localhost:3000",
	});
	app.set("io", io);

	const room = io.of("/room");
	const chat = io.of("/chat");

	room.on("connection", (socket) => {
		socket.on("");

		socket.on("disconnect", () => {
			console.log("room 네임스페이스 접속 해제");
		});
	});

	chat.on("connection", (socket) => {
		socket.on("join", (data) => {
			socket.join(data.room);
		});

		socket.on("message", (data) => {
			socket.to(data.room).emit(data);
		});

		socket.on("disconnect", () => {});
	});
};
