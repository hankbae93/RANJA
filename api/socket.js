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
		const req = socket.request;
		const username = req._query.username;
		console.log(`${username} 채팅페이지 접속`);

		socket.on("disconnect", () => {
			console.log(`${username} 채팅페이지 나감`);
		});
	});

	chat.on("connection", (socket) => {
		const req = socket.request;
		const roomId = req._query.roomId;
		console.log(req._query);
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
