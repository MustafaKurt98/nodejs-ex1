const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model-model');

const iceceklerSchema = new mongoose.Schema({
    "SMOOTHIES": [MenuModel],
    "FROZEN": [MenuModel],
    "MESRUBATLAR": [MenuModel],
})

module.exports = mongoose.model('icecekler', iceceklerSchema);