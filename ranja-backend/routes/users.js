const User = require("../models/User");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.get("/friends", isLoggedIn, async (req, res) => {
	try {
		const user = req.user;
		let userFriends = [];
		if (user.friendList.length > 0) {
			const arr = await Promise.all(
				user.friendList.map(async (friend) => {
					const friendData = await User.findOne({ _id: ObjectId(friend) });
					const { password, updatedAt, _id, ...friendsInfo } = friendData._doc;
					return friendsInfo;
				})
			);
			userFriends = arr;
		}
		res.status(200).json(userFriends);
	} catch (err) {
		console.error(err);
		res.status(500).json(err);
	}
});

module.exports = router;
