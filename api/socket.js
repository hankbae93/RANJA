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
		const req = socket.request;
		const roomId = req._query.roomId;
		console.log(`${roomId} 방 채팅에 접속`);
		socket.join(roomId);

		socket.on("join", (data) => {
			socket.join(data.room);
		});

		socket.on("disconnect", () => {
			console.log(`${roomId} 방 채팅 나감`);
			socket.leave(roomId);
		});
	});
};
