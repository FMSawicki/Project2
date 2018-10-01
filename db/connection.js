const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dogbay");
mongoose.Promise = Promise;
module.exports = mongoose;
