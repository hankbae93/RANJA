const User = require("../models/User");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.post("/around/normal", async (req, res) => {
	try {
		const lat = req.body.lat;
		const lng = req.body.lng;
		const data = await User.find(
			{
				location: {
					$near: {
						$maxDistance: 500,
						$geometry: {
							type: "Point",
							coordinates: [lng, lat],
						},
					},
				},
			},
			{ _id: 0, password: 0 }
		);

		return res.status(200).json(data);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

router.post("/around/auth", isLoggedIn, async (req, res) => {
	try {
		const lat = req.body.lat;
		const lng = req.body.lng;
		const users = await User.find(
			{
				location: {
					$near: {
						$maxDistance: 500,
						$geometry: {
							type: "Point",
							coordinates: [lng, lat],
						},
					},
				},
			},
			{ password: 0 }
		);

		const data = users.map((user) => {
			const userId = user._id.toString();
			const isFriend = req.user.friendList.some((el) => el === userId);
			const { _id, ...others } = user._doc;
			return { ...others, isFriend };
		});

		return res.status(200).json(data);
	} catch (err) {
		console.error(err);
		return res.status(500).json(err);
	}
});

module.exports = router;
