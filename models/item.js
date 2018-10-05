const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Bid = new Schema({
  amount: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Item = new Schema({
  name: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  starting: Number,
  bids: [Bid]
});

module.exports = {
  Item: mongoose.model("Item", Item),
  Bid: mongoose.model("Bid", Bid)
};
