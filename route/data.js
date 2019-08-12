var express = require("express");
var universe = express.Router();
var path = require("path");
var admindata = require("./admin");

universe.get("/alldata", (req, res) => {
  res.send(admindata.data);
});

module.exports = universe;
