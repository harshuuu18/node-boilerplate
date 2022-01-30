const multer = require("multer");

module.exports = {
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, DIR);
		},
		filename: (req, file, cb) => {
			const fileName = file.originalname.toLowerCase().split(" ").join("-");
			cb(null, fileName);
		},
	}),
};
