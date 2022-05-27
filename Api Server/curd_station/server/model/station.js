const mongoose = require("mongoose");
const stationSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Auth',
			

		},
		name: {
			type: "string",
			required: [true, "please add a name value"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Station", stationSchema);
