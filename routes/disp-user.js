//jshint esversion:6

const express = require("express");
const router = express.Router();
const usersData = require("./add-user");

router.get("/", (req, res, next) => {
    res.render("index", {
        pageTitle: "Display User",
        path: "/",
        userList: usersData.users
    });
});

module.exports = router;