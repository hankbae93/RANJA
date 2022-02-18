const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		min: 3,
		max: 10,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		max: 30,
		unique: true,
	},
	password: {
		type: String,
		required: true,
		min: 6,
	},
	desc: {
		type: String,
		max: 50,
	},
	profileImg: {
		type: String,
	},
	location: {
		type: Array,
		default: [37.614983, 127.057804],
	},
	friendList: {
		type: Array,
		default: [],
	},
});

module.exports = mongoose.model("User", UserSchema);
