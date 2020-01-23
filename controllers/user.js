//jshint esversion:6
const user = [];
exports.getAddUser = (req, res, next) => {
    res.render("add-user", {
        pageTitle: "Add-User Page",
        path: "/add-user"
    });
};

exports.postAddUser = (req, res, next) => {
    user.push(req.body.userName);

    res.render("index", {
        pageTitle: "Display User",
        path: "/",
        userList: user
    });
}

exports.getDispUser = (req, res, next) => {
    res.render("index", {
        pageTitle: "Display User",
        path: "/",
        userList: user
    });
};