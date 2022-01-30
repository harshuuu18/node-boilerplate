const mongoose = require("mongoose");
const express = require("express");
const Test = require("../model/test");
const { r } = require("../helpers/response");
const { upload } = require("../helpers/multer");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		let test = await Test.find({});
		let id = new mongoose.Types.ObjectId();
		console.log(typeof id.id);
		return r(res, true, "hello", test);
	} catch (err) {
		console.log(err);
		return r(res, false, err, null);
	}
});

router.post("/img", upload.single("my_image"), async (req, res) => {
	try {
		return r(res, true, "hello", "test");
	} catch (err) {
		console.log(err);
		return r(res, false, err, null);
	}
});

module.exports = router;
