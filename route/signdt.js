var express = require("express");
var route = express.Router();
var path = require("path");
var signupdatas = require("./signup");

route.get("/file", (req, res) => {
  console.log(signupdatas.data);
  res.redirect("/login");
});

module.exports = route;
