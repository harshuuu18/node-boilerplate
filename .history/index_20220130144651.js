/** @format */

const express = require("express");
const app = express();
const { port } = require("./configs");
const db = require("@db");

db();

app.use(require("./routes/test"));

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
