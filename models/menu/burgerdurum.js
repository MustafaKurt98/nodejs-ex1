const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const burgerdurumSchema = new mongoose.Schema({
    burgerdurum: [MenuModel],
})

module.exports = mongoose.model('burgerdurum', burgerdurumSchema);
