var express = require("express");
var route = express.Router();
var path = require("path");
var bodyparser = require("body-parser");
var data = [];

route.use(bodyparser.urlencoded({ extended: true }));
route.use("/signupdata", (req, res) => {
  //   console.log("hello");
  res.sendFile(
    path.join(__dirname, "../", "view", "colorlib-regform-8", "index.html")
  );
});

route.post("/details", (req, res) => {
  //   console.log("hello1");

  data.push({
    username: req.body.username1,
    password: req.body.password1,
    email: req.body.email
  });
  res.redirect("/file");
});

exports.data = data;
exports.route = route;
