//jshint esversin:6

const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/add-user", userControllers.getAddUser);

router.post("/add-user", userControllers.postAddUser);

module.exports = router;