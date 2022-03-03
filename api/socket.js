const SocketIO = require("socket.io");

const users = [];

const addUser = ({ id, username, room }) => {
	username = username.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find(
		(user) => user.room === room && user.username === username
	);

	if (!username || !room) return { error: "Username and room are required." };
	if (existingUser) return { error: "Username is taken." };

	const user = { id, username, room };

	users.push(user);

	return { user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (id) => users.find((user) => user.id === id);

module.exports = (server, app) => {
	const io = SocketIO(server, {
		path: "/socket.io",
		cors: "http://localhost:3000",
	});
	app.set("io", io);

	const room = io.of("/room");
	const chat = io.of("/chat");

	room.on("connection", (socket) => {
		console.log(`${socket.id} "room 네임스페이스에 접속"`);
		socket.on("disconnect", () => {
			console.log("room 네임스페이스 접속 해제");
		});
	});

	chat.on("connection", (socket) => {
		socket.on("join", (data) => {
			const { username, room } = data;
			const { error, user } = addUser({ id: socket.id, username, room });

			if (error) {
				return console.error(error);
			}

			socket.join(user.room);
		});

		socket.on("sendMessage", (message) => {
			const user = getUser(socket.id);
			console.log(message);
			chat.to(user.room).emit("message", {
				username: message.username,
				chat: message.chat,
			});
			console.table(users);
		});

		socket.on("disconnect", () => {
			removeUser(socket.id);
		});
	});
};
