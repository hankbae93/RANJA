const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { ObjectId } = require("mongodb");

const { isLoggedIn, isNotLoggedIn } = require("../middlewares/auth");

const router = require("express").Router();
// 회원가입
router.post("/register", isNotLoggedIn, async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Login
router.post("/login", isNotLoggedIn, async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			console.error(err);
			return next(err);
		}
		if (info) {
			return res.status(401).send(info.reason);
		}
		return req.login(user, async (loginErr) => {
			if (loginErr) {
				console.error(loginErr);
				return next(loginErr);
			}

			const fullUser = await User.findOne({ _id: user._id });
			const { password, updatedAt, _id, ...others } = fullUser._doc;

			return res.status(200).json(others);
		});
	})(req, res, next);
});

// Logout
router.post("/logout", isLoggedIn, (req, res) => {
	req.logout();
	req.session.destroy();
	res.send("OK");
});

// 내 정보 가져오기
router.get("/", async (req, res, next) => {
	try {
		if (req.user) {
			console.log(req.user);
			const user = await User.findOne({ _id: ObjectId(req.user.id) });
			const { password, updatedAt, _id, ...others } = user._doc;
			res.status(200).json(others);
		} else {
			res.status(200).json(null);
		}
	} catch (err) {
		console.error(err);
		next(err);
	}
});

module.exports = router;
