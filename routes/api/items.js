
const express = require("express");
const router = express.Router();

const Item = require("../../models/Item");

// GET api/items get all items
router.get("/", (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// TypeError: Cannot read property 'get' of undefined

// This error is because of the old version of express. 

// POST api/items create an item
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });
    newItem
        .save()
        .then(item => res.json(item));
});

// DELETE api/items/:itemId delete an item
router.delete("/:itemId", (req, res) => {
    Item.findById(req.params.itemId)
        .then(item => item
            .remove()
            .then(item => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;








