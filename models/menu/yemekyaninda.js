const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const yemekyanindaSchema = new mongoose.Schema({
    yemeginyaninda: [MenuModel],
})

module.exports = mongoose.model('yemekyaninda', yemekyanindaSchema);
