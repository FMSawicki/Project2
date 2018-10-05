const express = require("express");
const app = express();
const hbs = require("hbs");
const routes = require("./routes/routes");
const bodyParser = require("body-parser");
app.set("port", process.env.PORT || 3001);

app.use(express.static("public"));

// require("passport")(passport);
// app.use(passport.initialize());
// app.use(passport.session());

app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
