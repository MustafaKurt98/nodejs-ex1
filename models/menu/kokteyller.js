const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model');

const kokteyllerSchema = new mongoose.Schema({
    specialkokteyller: {
        aperatifkokteyller: [MenuModel],
        yemeksonrasikokteyller: [MenuModel],
        yuksekalkollu: [MenuModel]
    },
    cintonikokteyller: [MenuModel],
    klasikkokteyller: [MenuModel]
})

module.exports = mongoose.model('kokteyller', kokteyllerSchema);