//jshint esversion:6

const express = require("express");
const router = express.Router();
// const usersData = require("./add-user");
const userController = require("../controllers/user");

router.get("/", userController.getDispUser);

module.exports = router;