const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model-model');

const pizzamakarnaSchema = new mongoose.Schema({
    "PIZZA & MAKARNA": [MenuModel],
})

module.exports = mongoose.model('pizzamakarna', pizzamakarnaSchema);
