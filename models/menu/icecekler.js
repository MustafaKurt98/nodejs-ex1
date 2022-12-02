const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const iceceklerSchema = new mongoose.Schema({
    smoothies: [MenuModel],
    frozen: [MenuModel],
    mesrubatlar: [MenuModel],
})

module.exports = mongoose.model('icecekler', iceceklerSchema);