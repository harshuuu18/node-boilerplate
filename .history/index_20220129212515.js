/** @format */

const express = require("express");
const app = express();
const {port} from './configs/index.js'

app.get("/", (req, res) => {
	res.send("hello");
});

app.listen()