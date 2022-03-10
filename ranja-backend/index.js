const express = require("express");
const app = express();
const server = require("http").createServer(app);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const cors = require("cors");

const webSocket = require("./socket");
const passportConfig = require("./passport");

const authRoute = require("./routes/auth");
const friendRequestRoute = require("./routes/friendRequest");
const userRoute = require("./routes/users");
const mapRoute = require("./routes/map");
const roomRoute = require("./routes/room");
const chatRoute = require("./routes/chat");

dotenv.config();
passportConfig();

const { COOKIE_SECRET, MONGO_URL, NODE_ENV } = process.env;

mongoose.connect(
	MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);

if (NODE_ENV === "production") {
	app.use(morgan("combined"));

	app.use(
		cors({
			origin: ["http://localhost:3000", "http://www.ranja.o-r.kr"],
			credentials: true,
		})
	);

	app.use(
		session({
			saveUninitialized: false,
			resave: false,
			secret: COOKIE_SECRET,
			cookie: {
				httpOnly: true,
				secure: false,
				domain: ".ranja.o-r.kr",
			},
		})
	);
} else {
	app.use(morgan("dev"));

	app.use(
		cors({
			origin: ["http://localhost:3000", "http://www.ranja.o-r.kr"],
			credentials: true,
		})
	);

	app.use(
		session({
			saveUninitialized: false,
			resave: false,
			secret: COOKIE_SECRET,
		})
	);
}
app.use(helmet());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(COOKIE_SECRET));

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
	res.send("Hello Ranja Chat");
});

app.get("/api", (req, res) => {
	res.send("Hello Ranja Chat API");
});

app.use("/api/auth", authRoute);
app.use("/api/friendRequest", friendRequestRoute);
app.use("/api/users", userRoute);
app.use("/api/map", mapRoute);
app.use("/api/room", roomRoute);
app.use("/api/chat", chatRoute);

const port = process.env.PORT || 8000;

server.listen(port, () => {
	console.log(port + " Backend server is running!");
});

webSocket(server, app);
