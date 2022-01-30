/** @format */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { port } = require("./configs");
const db = require("./db/index");

db();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("./routes/test"));

app.listen(port, () => {
	console.log(`server is running on ${port}`);
});
