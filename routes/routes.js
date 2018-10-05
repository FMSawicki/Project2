const express = require("express");
const router = require("express").Router();
const app = express();
const { Item, Bid } = require("../models/item");
const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/dogbay";
const assert = require("assert");
const bodyParser = require("body-parser");

router.get("/", function(req, res) {
  res.render("main");
});

router.get("/listitem", function(req, res) {
  res.render("newItem");
});
// /:id
router.get("/details", function(req, res) {
  res.render("show");
});
// router.get("/new", function(req, res) {
//   res.render("main");
// });

//Create new item
router.post("/", (req, res) => {
  Item.create({
    name: req.body.createName,
    description: req.body.createItemDes,
    starting: req.body.createStarting
  }).then(Item => {
    res.render("/main");
  });
});

//connect to database
mongo.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("dogbay");
    dbo
      .collection("items")
      .find({})
      .toArray(function(err, result) {
        if (err) throw err;
        db.close();
      });
  }
);

app.put("/name/update/:id", (req, res, next) => {
  var id = {
    _id: new ObjectID(req.params.id)
  };

  dbase.collection("name").update(
    id,
    {
      $set: {
        name: req.body.name,
        description: req.body.description,
        starting: req.body.starting
      }
    },
    (err, result) => {
      if (err) {
        throw err;
      }

      res.send("user updated sucessfully");
    }
  );
});

app.delete("/name/delete/:id", (req, res, next) => {
  let id = ObjectID(req.params.id);

  dbase.collection("name").deleteOne({ _id: id }, (err, result) => {
    if (err) {
      throw err;
    }

    res.send("Item deleted");
  });
});

module.exports = router;
