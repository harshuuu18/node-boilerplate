const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");

const DIR = "./public/";
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		let id = new mongoose.Types.ObjectId().toString();
		const fileName = `${id}${path.extname(file.originalname)}`;
		cb(null, fileName);
	},
});
module.exports = {
	upload: multer({
		storage: storage,
		fileFilter: (req, file, cb) => {
			if (
				file.mimetype == "image/png" ||
				file.mimetype == "image/jpg" ||
				file.mimetype == "image/jpeg"
			) {
				cb(null, true);
			} else {
				cb(null, false);
				return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
			}
		},
	}),
};