const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const pizzamakarnaSchema = new mongoose.Schema({
    pizzamakarna: [MenuModel],
})

module.exports = mongoose.model('pizzamakarna', pizzamakarnaSchema);
