const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Item Modole
const Item = require('../../models/Item');

// @route  Get request to api/items
// @desc   Get all the items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => {
            // Creating new object that contains only id and name of the product
            const sorted_items = items.map(item => {
                return {
                    'id': item._id,
                    'name': item.name
                    };
            });
            res.json(sorted_items);
        });
});

// @route  post request to api/items
// @desc   create an item
// @access Private
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json({
            'name': item.name,
            'id': item._id
        }))
        .catch(err => console.log("Cannot create item ", err));
});

// @route  delete request to api/items
// @desc   deletes an item
// @access Private
router.delete('/:id', auth, (req, res) => {
    console.log("request getting hitted")
    Item.findById(req.params.id)
        .then(item => item.remove()
            .then(() => res.json({ success: true }))
            .catch(err => console.log("couldn't remove the item")))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
