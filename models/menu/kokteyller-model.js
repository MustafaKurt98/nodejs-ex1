const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model-model');

const kokteyllerSchema = new mongoose.Schema({
    "SPECIAL COCTAILS": {
        "APERATIF KOKTEYLLER": [MenuModel],
        "YEMEK SONRASI KOKTEYLLER": [MenuModel],
        "YUKSEK ALKOLLU KOKTEYLLER": [MenuModel]
    },
    "GIN TONIC COCTAILS": [MenuModel],
    "ClASSIC COCTAILS": [MenuModel]
})

module.exports = mongoose.model('kokteyller', kokteyllerSchema);