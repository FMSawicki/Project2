const express = require("express");
const app = express();
const hbs = require("hbs");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(express.static("public"));

// require("passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());

app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(4000, (req, res) => {
  console.log("ACAB");
});
