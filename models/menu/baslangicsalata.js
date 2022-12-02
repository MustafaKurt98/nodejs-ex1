const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const baslangicSchema = new mongoose.Schema({
    "BAŞLANGIÇ & SALATALAR": [MenuModel],
})

module.exports = mongoose.model('baslangiclar', baslangicSchema);
