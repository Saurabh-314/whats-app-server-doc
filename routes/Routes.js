const express = require("express");

const { addUser, getUser } = require("../controller/userController.js");
const { newMessage, getMessage } = require("../controller/messageController.js");

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUser);

route.post('/message/add', newMessage);
route.get('/message/get', getMessage);

module.exports = route;