const { Item, Bid } = require("../models/item");
const User = require("../models/user");

module.exports = {
  show: (req, res) => {
    item
      .findOne({ _id: req.params.id })
      .populate("user")
      .then(item => {
        Bid.populate(item.bid, { path: "user" }).then(bid => {
          item.bid = bid;
          res.render("item/show", item);
        });
      });
  },
  delete: (req, res) => {
    item.findOneAndRemove({ _id: req.params.id }).then(item => {
      res.redirect("/");
    });
  },
  create: (req, res) => {
    item
      .create({
        name: req.body.createName,
        description: req.body.createItemDes,
        starting: req.body.createStarting
      })
      .then(item => {
        res.redirect(`/item/${item._id}`);
      });
  }
};
