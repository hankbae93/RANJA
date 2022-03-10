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
		type: {
			type: String,
			enum: ["Point"],
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
	friendList: {
		type: Array,
		default: [],
	},
});

UserSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("User", UserSchema);
