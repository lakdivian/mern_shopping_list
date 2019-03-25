const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itemschema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', Itemschema);