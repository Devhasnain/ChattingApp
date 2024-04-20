const {Router} = require("express");
const { GetConversation } = require("../controllers/Conversations");

const route = Router();


route.get("/", GetConversation);


module.exports = route