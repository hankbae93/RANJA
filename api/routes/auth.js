const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = require("express").Router();
// 회원가입
router.post("/register", async (req, res) => {
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
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.status(401).json("등록되지 않은 유저입니다.");
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res
				.status(400)
				.json("아이디가 없거나 비밀번호가 일치하지 않습니다.");
		}

		const { password, updatedAt, ...others } = user._doc;
		res.status(200).json(others);
	} catch (error) {
		console.error();
		res.status(500).json(error);
	}
});

module.exports = router;
