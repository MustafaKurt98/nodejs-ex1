const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const tatliSchema = new mongoose.Schema({
    tatli: [MenuModel],
})

module.exports = mongoose.model('tatlilar', tatliSchema);
