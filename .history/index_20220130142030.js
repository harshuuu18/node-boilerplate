/** @format */

const express = require("express");
const app = express();
const { port } = require("./configs");
const db = require("./db/index");

db();

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
