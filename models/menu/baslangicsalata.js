const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const baslangicSchema = new mongoose.Schema({
    baslangic: [MenuModel],
})

module.exports = mongoose.model('baslangiclar', baslangicSchema);
