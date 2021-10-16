const express = require("express");
const router = express.Router();
const Item = require("../models/item.js");


// const item1 = new Item({title: "Eat fruits"});
// item1.save(err => {
//     if (err) throw err;
// });

router.get("/", (req, res) => {
  const items = Item.find({}, (err, data) => {
    res.render("todo", { data: data });
  });
});

router.post("/", (req, res) => {
  let newItem = new Item({ title: req.body.title });
  newItem.save(err => {
      if (err) throw err;
  })
  console.log(newItem);
  res.redirect("/");
});

router.delete("/:item", (req, res) => {
  console.log("Delete: " + req.params.item);
  const d = Item.find({title: req.params.item});
  d.remove(); 
})

module.exports = router;
