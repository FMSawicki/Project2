const express = require("express");
const app = express();
var exphbs = require("express-handlebars");

app.get("/", function(req, res) {
  res.render("home");
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(4000, (req, res) => {
  console.log("ACAB");
});
