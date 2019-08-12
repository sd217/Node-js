var mongoose = require("mongoose");
//create database
mongoose
  .connect("mongodb://localhost/logindata", { useNewUrlParser: true })
  .then(() => {
    console.log("DB connected....");
  })
  .catch(err => console.log("DB not connected", err));

const logincreate = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model("logindata", logincreate);
