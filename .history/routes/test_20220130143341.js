const mongoose = require("mongoose");
const express = require("express");
const Test = require("../model/test");
const { r } = require("../helpers/response");

const router = express.Router();

router.get("/", (req, res) => {
	try {
		return r(true, "hello", null);
	} catch (err) {
		console.log(err);
		return res.json({
			status: false,
			message: err,
			data: null,
		});
	}
});

module.exports = router;
