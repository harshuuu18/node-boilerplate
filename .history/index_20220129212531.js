/** @format */

const express = require("express");
const app = express();
const { port } = require("./configs");

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen();