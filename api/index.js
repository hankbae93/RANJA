const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const authRoute = require("./routes/auth");
const friendRequestRoute = require("./routes/friendRequest");
dotenv.config();

mongoose.connect(
	process.env.MONGO_URL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log("Connected to MongoDB");
	}
);

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

app.use("/api/auth", authRoute);
app.use("/api/friendRequest", friendRequestRoute);

app.listen(8000, () => {
	console.log("Backend server is running!");
});
