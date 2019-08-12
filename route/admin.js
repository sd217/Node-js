var express = require("express");
var universe = express.Router();
var path = require("path");
var bodyparser = require("body-parser");
var data = [];
var logindata = require("../dao/data_dao");

universe.use(bodyparser.urlencoded({ extended: true }));
universe.use("/login", (req, res) => {
  // console.log("hello");
  res.sendFile(path.join(__dirname, "../", "view", "home.html"));
});

universe.post("/logindetails", async (req, res) => {
  const newdata = new logindata({
    username: req.body.username,
    password: req.body.password
  });
  await newdata.save();
  getdta();
});
async function getdta() {
  users = await logindata.find();
  console.log("all data in db" + users);
}

exports.universe = universe;
exports.data = data;
