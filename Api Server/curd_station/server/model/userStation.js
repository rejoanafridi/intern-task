const mongoose = require("mongoose");
const authSchema = mongoose.Schema(
	{
		name: {
			type: "string",
			required: [true, "please add a name"],
		},
		email: {
			type: "string",
			required: [true, "please add a email address"],
		},
		password: {
			type: "string",
			required: [true, "please add a password"],
		},
	},
	{
		timestamps: true,
	}
);
module.exports = mongoose.model('Auth', authSchema)