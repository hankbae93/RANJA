const Room = require("../models/Room");
const Chat = require("../models/Chat");
const User = require("../models/User");

const { isLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");
const router = require("express").Router();

router.get("/room/:id", isLoggedIn, async (req, res, next) => {
	try {
		const room = await Room.findOne({ _id: ObjectId(req.params.id) });

		if (!room) {
			return res.status(400).json("존재하지 않는 방입니다.");
		}

		const chats = await Chat.find({ room: room._id }).sort("createdAt");

		const partnerId = room.owner.filter((id) => id !== req.user.id)[0];
		const partner = await User.findOne({ _id: ObjectId(partnerId) });
		const { _id, password, ...partnerInfo } = partner._doc;

		return res.status(200).json({
			room,
			chats,
			partner: partnerInfo,
		});
	} catch (error) {
		console.error(error);
		return next(error);
	}
});

router.post("/message", isLoggedIn, async (req, res, next) => {
	try {
		const { chat, roomId } = req.body;
		const newChat = await Chat.create({
			room: roomId,
			user: req.user.id,
			chat,
			username: req.user.username,
		});
		const { _id, user, ...rest } = newChat._doc;

		const io = req.app.get("io");
		io.of("/chat").to(roomId).emit("message", rest);
		res.send("ok");
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
