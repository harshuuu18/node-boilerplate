const mongoose = require("mongoose");
const express = require("express");
const Test = mongoose.model.Test;
const { r } = require("../helpers/response");

const router = express.Router();

router.get("/", (req, res) => {
	try {
		return r(res, true, "hello", null);
	} catch (err) {
		console.log(err);
		return r(res, false, err, null);
	}
});

module.exports = router;
