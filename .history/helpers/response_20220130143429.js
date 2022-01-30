module.exports = {
	r: (res, status, message, data) => {
		return res.json({
			status: status,
			message: message,
			data: data,
		});
	},
};
