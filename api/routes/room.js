const User = require("../models/User");
const Room = require("../models/Room");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");
const router = require("express").Router();

router.get("/", isLoggedIn, async (req, res, next) => {
	try {
		const currentUserId = req.user.id;
		const rooms = await Room.find({ owner: { $in: currentUserId } });
		const newArr = await Promise.all(
			rooms.map(async (room) => {
				const partnerId = room.owner.filter((el) => el !== currentUserId)[0];
				const user = await User.findOne({ _id: ObjectId(partnerId) });
				const { password, _id, ...userInfo } = user._doc;
				return { ...room._doc, partner: userInfo };
			})
		);

		res.status(200).json(newArr);
	} catch (err) {
		console.log(err);

		next(err);
	}
});

router.post("/", isLoggedIn, async (req, res, next) => {
	try {
		const receiver = await User.findOne({ username: req.body.username });

		const isRoom = await Room.findOne({
			owner: { $in: receiver._id.toString() },
		});

		if (isRoom) {
			return res.status(200).json(isRoom._id);
		} else {
			const newRoom = await Room.create({
				title: req.body.title ?? receiver.username,
				max: req.body.max ?? 2,
				owner: [req.user.id, receiver.id],
				password: req.body.password ?? "",
			});

			return res.status(200).json(newRoom._id.toString());
		}
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = router;
