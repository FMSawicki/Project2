const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Bid = new Schema({
  amount: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Item = new Schema({
  name: String,
  picture: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  starting: Number,
  current: Number,
  bids: [bid]
});

module.exports = {
  Item: mongoose.model("Item", Item),
  Bid: mongoose.model("Bid", Bid)
};
