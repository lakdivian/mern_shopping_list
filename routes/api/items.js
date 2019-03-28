const express = require('express');
const router = express.Router();

//Item Modole
const Item = require('../../models/Item');

// @route  Get request to api/items
// @desc   Get all the items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            items.map(item => )
        });
})

// @route  post request to api/items
// @desc   create an item 
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(err => console.log("Cannot create item ", err))
})

// @route  delete request to api/items
// @desc   deletes an item 
// @access Public
router.delete('/:id', (req, res) => {
    console.log("request getting hitted")
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({ success: true }))
            .catch(err => console.log("couldn't remove the item")))
        .catch(err => res.status(404).json({ success: false }))
})

module.exports = router;