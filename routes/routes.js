const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.render("main");
});

app.get("/listitem", function(req, res) {
  res.render("newItem");
});

// app.get("/", function(req, res) {
//   res.render("login");
// });

// app.get("/createuser", function(req, res) {
//   res.render("newUser");
// });

module.exports = app;
