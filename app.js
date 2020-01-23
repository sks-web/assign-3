//jshint esversin:6

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const path = require("path");
const addUser = require("./routes/add-user");
const dispUser = require("./routes/disp-user");

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

app.use(addUser);
app.use(dispUser);

app.use((req, res, next) => {
    res.status(404).render("404", {
        pageTitle: "Page Not Found",
        path:""
    });
})

app.listen(3000, () => {
    console.log("Server start at port 3000");

});