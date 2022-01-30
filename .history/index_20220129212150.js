/** @format */

import express from "express";
import env from "./configs/index.js";
// let port = 5000;

const app = express();

app.get("/", (req, res) => {
	res.send("hi");
});

app.listen(env.port, () => {
	console.log(`Server is running on ${port}`);
});
