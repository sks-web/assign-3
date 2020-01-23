//jshint esversin:6

const express = require("express");
const router = express.Router();

const user = [];

router.get("/add-user", (req, res, next) => {
    res.render("add-user", {
        pageTitle: "Add-User Page",
        path: "/add-user"
    });
});

router.post("/add-user", (req, res, next) => {
    user.push(req.body.userName);

    res.render("index", {
        pageTitle: "Display User",
        path: "/",
        userList: user
    });
});

exports.router = router;
exports.users = user;