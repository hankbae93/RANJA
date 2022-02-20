const passport = require("passport");
const local = require("./local");
const User = require("../models/User");
const { ObjectId } = require("mongodb");

module.exports = () => {
	passport.serializeUser((user, done) => {
		done(null, user._id);
	});

	passport.deserializeUser(async (id, done) => {
		try {
			const user = await User.findOne({ _id: ObjectId(id) });
			done(null, user);
		} catch (error) {
			console.error(error);
			done(error);
		}
	});

	local();
};
