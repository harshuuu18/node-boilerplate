/** @format */

import express from "express";
import { port } from "./configs";
port;
const app = express();

app.get("/", (req, res) => {
	res.send("hi");
});

app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
