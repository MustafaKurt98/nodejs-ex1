const mongoose = require('mongoose');
const MenuModel = require('../../models/menu/menu.model-model');

const alkollerSchema = new mongoose.Schema({
    "BIRALAR / BEERS": [MenuModel],
    "SARAPLAR/WINES": {
        "KIRMIZI SARAPLAR": [MenuModel],
        "BEYAZ SARAPLAR/WHITE WINES": [MenuModel],
        "ROSE SARAPLAR/ROSE WINES": [MenuModel]
    },
    "VISKILER/WHISKEY": {
        "AMERICAN VISKISI/AMERIKAN WHISKEY": [MenuModel],
        "ISKOC VISKISI/SCOTCH WHISKEY": [MenuModel],
        "SINGLE MALT VISKISI/SINGLE MALT WHISKEY": [MenuModel],
        "IRLANDA VISKISI/IRISH WHISKEY": [MenuModel]
    },
    "VOTKA/VODKA": [MenuModel],
    "CIN/GIN": [MenuModel],
    "TEKILA/TEQUILA": [MenuModel],
    "KONYAKLAR/COGNAC": [MenuModel],
    "LIKORLER/LIQUEUR": [MenuModel],
    "ROM": [MenuModel],
    "VERMUT": [MenuModel]
})

module.exports = mongoose.model('alkoller', alkollerSchema);