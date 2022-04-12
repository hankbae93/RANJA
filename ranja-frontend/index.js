const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(PORT, () => console.log(`listening on the port ${PORT}`));
