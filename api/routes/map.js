const User = require("../models/User");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.post("/around", async (req, res) => {
	try {
		const lat = req.body.lat;
		const lng = req.body.lng;
		const data = await User.find(
			{
				location: {
					$near: {
						$maxDistance: 100,
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

module.exports = router;
