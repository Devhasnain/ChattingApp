const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const ConversationRoute = require("./routes/conversations");
const AuthRoute = require("./routes/auth");

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/conversations", ConversationRoute);
app.use("/auth", AuthRoute);

module.exports = app;
