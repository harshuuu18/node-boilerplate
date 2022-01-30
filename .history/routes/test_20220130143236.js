const mongoose = require("mongoose");
const express = require("express");
const Test = require("../model/test");
const { r } = require("../helpers/response");

const router = express.Router();

router.get("/", (req, res) => {
	try {
		return r(res, true, "hello", null);
	} catch (err) {
		return res.json({
			status: false,
			message: err,
			data: null,
		});
	}
});

module.exports = router;
