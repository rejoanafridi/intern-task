const mongoose = require("mongoose");
const stationSchema = mongoose.Schema(
	{
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
