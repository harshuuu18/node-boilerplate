/** @format */
const mongoose = require("mongoose");
module.exports = (req, res) => {
	/** @format */

	function initDb() {
		if (mongoose.connections[0].readyState) {
			console.log("already connected");
			return;
		}

		mongoose.connect(
			// "mongodb+srv://harsh:1Wx1fkJ8IxY2Z08u@cluster0.qdude.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
			"mongodb://localhost:27017/myNewDatabase",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		mongoose.connection.on("connected", () => {
			console.log("Connected to mongo");
		});
		mongoose.connection.on("error", (err) => {
			console.log("Connected to mongo", err);
		});
	}

	export default initDb;
};
