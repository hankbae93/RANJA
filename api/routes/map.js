const User = require("../models/User");
const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");
const { ObjectId } = require("mongodb");

const router = require("express").Router();

router.get("/current/all", async (req, res) => {
	try {
		const center = req.body.center;
		const data = await User.find(
			{
				location: {
					$near: {
						$maxDistance: 1000,
						$geometry: {
							type: "Point",
							coordinates: [center.lng, center.lat],
						},
					},
				},
			},
			{ _id: 0, password: 0 }
		);

		return res.status(200).json(data);
	} catch (err) {
		console.error(err);
	}
});

module.exports = router;
