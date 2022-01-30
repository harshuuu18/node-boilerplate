/** @format */
const mongoose = require("mongoose");
module.exports = (req, res) => {
	if (mongoose.connections[0].readyState) {
		console.log("already connected");
		return;
	}

	mongoose.connect("mongodb://localhost:27017/findPg", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	mongoose.connection.on("connected", () => {
		console.log("Connected to mongo");
	});
	mongoose.connection.on("error", (err) => {
		console.log("Connected to mongo", err);
	});
};
