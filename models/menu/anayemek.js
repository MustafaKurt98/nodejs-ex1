const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const anayemekSchema = new mongoose.Schema({
    "ANA YEMEKLER": [MenuModel],
})

module.exports = mongoose.model('anayemekler', anayemekSchema);
