module.exports = {
	r: (res, status, message, data) => {
		return res.json({
			status,
			message,
			data,
		});
	},
};
