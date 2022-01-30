const mongoose = require("mongoose");
const express = require("express");
const Test = mongoose.models.Test;
const { r } = require("../helpers/response");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let test = await Test.find({});
		return r(res, true, "hello", test);
	} catch (err) {
		console.log(err);
		return r(res, false, err, null);
	}
});

module.exports = router;
