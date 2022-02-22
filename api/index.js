const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const upload = multer();
const passport = require("passport");
const path = require("path");
const cors = require("cors");
const passportConfig = require("./passport");

const authRoute = require("./routes/auth");
const friendRequestRoute = require("./routes/friendRequest");

dotenv.config();
passportConfig();

mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(multer().array());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
	session({
		saveUninitialized: false,
		resave: false,
		secret: process.env.COOKIE_SECRET,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.post("/api/uploads", upload.single("image"), async (req, res, next) => {
	const imgData = req.file;
	if (req.file) {
		await fetch(
			"https://api.imgbb.com/1/upload?expiration=600&key=fc7276cd6b10e1fbcc2c0fef52ad240e"
		);
	}
});
app.use("/api/auth", authRoute);
app.use("/api/friendRequest", friendRequestRoute);

app.listen(8000, () => {
	console.log("Backend server is running!");
});
