const mongoose = require("mongoose");
const express = require("express");
const Test = require("../db/index");
const { r } = require("../helpers/response");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		return r(res, true, "hello", test);
	} catch (err) {
		console.log(err);
		return r(res, false, err, null);
	}
});

module.exports = router;
