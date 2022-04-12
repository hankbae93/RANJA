const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema(
	{
		sender: {
			type: String,
			required: true,
		},
		receiver: {
			type: String,
			required: true,
		},
		isAccept: {
			type: Boolean,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("FriendRequest", FriendRequestSchema);
