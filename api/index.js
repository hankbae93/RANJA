const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8000, () => {
	console.log("Backend server is running!");
});
