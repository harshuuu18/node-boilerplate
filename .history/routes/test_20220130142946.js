const mongoose = require("mongoose");
const express = require("express");
const Test = require("../model/test");

const router = express.Router();

router.get("/", (req, res) => {
	try {
	} catch (err) {
		return res.json({
			status: false,
			message: err,
			data: null,
		});
	}
});

module.exports = router;
