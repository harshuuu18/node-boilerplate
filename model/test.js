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

module.exports = mongoose.models.Test || mongoose.model("Test", TestSchema);
