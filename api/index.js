const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

const passportConfig = require("./passport");

const authRoute = require("./routes/auth");
const friendRequestRoute = require("./routes/friendRequest");
const userRoute = require("./routes/users");
const mapRoute = require("./routes/map");

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

app.use("/api/auth", authRoute);
app.use("/api/friendRequest", friendRequestRoute);
app.use("/api/users", userRoute);
app.use("/api/map", mapRoute);

app.listen(8000, () => {
	console.log("Backend server is running!");
});
