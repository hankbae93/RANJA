const FriendRequest = require("../models/FriendRequest");
const User = require("../models/User");

const router = require("express").Router();

router.post("/:receiverId", async (req, res) => {
	try {
		const newFriendRequest = new FriendRequest({
			sender: req.body.userId,
			receiver: req.params.receiverId,
		});

		await newFriendRequest.save();
		res.status(200).json("친구 요청 성공");
	} catch (error) {
		res.status(500).json(error);
	}
});

// 친구 요청 수락/거절 따지기
router.post("/accept/:requestId", async (req, res) => {
	try {
		const friendRequest = await FriendRequest.findById(req.params.requestId);
		const isAccept = req.body.isAccept;
		// 수락 요청 여부가 없을 시
		if ((friendRequest.isAccept ?? true) === false) {
			return;
		}

		// 수락했을 시
		if (isAccept && friendRequest.receiver === req.body.userId) {
			const sendingUser = await User.findById(friendRequest.sender);
			const currentUser = await User.findById(req.body.userId);
			await sendingUser.updateOne({ $push: { friendList: req.body.userId } });
			await currentUser.updateOne({
				$push: { friendList: friendRequest.sender },
			});
			// await FriendRequest.deleteOne({ _id: req.params.requestId });
			await FriendRequest.updateOne({ isAccept: true });
			return res
				.status(200)
				.json({ userId: friendRequest.sender, isAccept: true });
		}

		// 거절했을 시
		if (!isAccept && friendRequest.receiver === req.body.userId) {
			await FriendRequest.updateOne({ isAccept: false });
			return res
				.status(200)
				.json({ meesage: "친구 요청을 거절하셨습니다.", isAccept: false });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
