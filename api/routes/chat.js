const Room = require("../models/Room");
const Chat = require("../models/Chat");
const User = require("../models/User");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");
const router = require("express").Router();

router.get("/room/:id", isLoggedIn, async (req, res, next) => {
	try {
		const room = await Room.findOne({ _id: ObjectId(req.params.id) });
		const io = req.app.get("io");
		if (!room) {
			return res.status(400).json("존재하지 않는 방입니다.");
		}

		const chats = await Chat.find({ room: room._id }).sort("createdAt");
		return res.status(200).json({
			room,
			title: room.title,
			chats,
		});
	} catch (error) {
		console.error(error);
		return next(error);
	}
});

router.post("/room/:id/chat", isLoggedIn, async (req, res, next) => {
	try {
		const chat = await Chat.create({
			room: req.params.id,
			user: req.user.id,
			chat: req.body.chat,
			username: req.user.username,
		});
		const { _id, user, ...rest } = chat;

		req.app.get("io").of("/chat").to(req.params.id).emit("message", rest);
		res.send("ok");
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
