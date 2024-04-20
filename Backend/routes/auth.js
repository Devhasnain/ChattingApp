const { Router } = require("express");
const { Login, SignUp, RefreshToken } = require("../controllers/Auth.js");
const route = Router();

route.post("/login", Login);
route.post("/signup", SignUp);
route.get("/refresh", RefreshToken);

module.exports = route;
