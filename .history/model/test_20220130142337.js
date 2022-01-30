const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
	{
		title: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model.Test || mongoose.model("Test", TestSchema);
