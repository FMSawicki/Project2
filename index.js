const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const passport = require("passport");

app.use(express.static("public"));

// require("passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render("main");
});

app.listen(4000, (req, res) => {
  console.log("ACAB");
});
