const User = require("../models/User");
const FriendRequest = require("../models/FriendRequest");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.get("/", isLoggedIn, async (req, res) => {
	try {
		const requestLists = await FriendRequest.find({
			receiver: req.user.id,
		});

		const newData = await Promise.all(
			requestLists.map(async (request) => {
				const user = await User.findOne({ _id: ObjectId(request.sender) });
				const { _id, __v, friendList, location, password, ...rest } = user._doc;
				return { ...rest, id: request._id, isAccept: request.isAccept };
			})
		);

		res.status(200).json(newData);
	} catch (err) {
		console.log(err);
		res.status(500).json(error);
	}
});

router.post("/:username", isLoggedIn, async (req, res) => {
	try {
		const receiver = await User.findOne({ username: req.params.username });

		const newFriendRequest = new FriendRequest({
			sender: req.user.id,
			receiver: receiver._id,
		});

		await newFriendRequest.save();
		res.status(200).json("친구 요청 성공");
	} catch (error) {
		res.status(500).json(error);
	}
});

// 친구 요청 수락/거절 따지기
router.post("/accept/:requestId", isLoggedIn, async (req, res) => {
	try {
		const friendRequest = await FriendRequest.findById(req.params.requestId);
		const isAccept = req.body.isAccept;
		// 수락 요청 여부가 없을 시
		if ((friendRequest.isAccept ?? true) === false) {
			return;
		}

		// 수락했을 시
		if (isAccept && friendRequest.receiver === req.user.id) {
			const sendingUser = await User.findById({
				_id: ObjectId(friendRequest.sender),
			});
			const currentUser = await User.findById({ _id: ObjectId(req.user.id) });
			await sendingUser.updateOne({ $push: { friendList: req.user.id } });
			await currentUser.updateOne({
				$push: { friendList: friendRequest.sender },
			});
			// await FriendRequest.deleteOne({ _id: req.params.requestId });
			await friendRequest.updateOne({ isAccept: true });
			return res.status(200).json("친구 요청 수락!");
		}

		// 거절했을 시
		if (!isAccept && friendRequest.receiver === req.user.id) {
			await friendRequest.updateOne({ isAccept: false });
			return res
				.status(200)
				.json({ meesage: "친구 요청을 거절하셨습니다.", isAccept: false });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
