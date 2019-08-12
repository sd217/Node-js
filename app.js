var express = require("express");
var app = express();
var admindata = require("./route/admin");
var datadata = require("./route/data");

var sign = require("../demo123/route/signup");
var signdt = require("../demo123/route/signdt");

app.use(signdt);
app.use(sign.route);

app.use(datadata);
app.use(admindata.universe);
app.listen(8080);
