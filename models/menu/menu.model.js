const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: Number,
    },
    description: {
        type: String,
    },
    price: {
        type: String,
    },
    img: {
        type: String,
    },
})

module.exports = mongoose.model('menu', menuSchema);