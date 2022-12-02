
const AlkollerModel = require('../../models/menu/alkoller');
const AnayemekModel = require('../../models/menu/anayemek');
const BaslangicModel = require('../../models/menu/baslangicsalata');
const BurgerDurumModel = require('../../models/menu/burgerdurum');
const IceceklerModel = require('../../models/menu/icecekler');
const KokteyllerModel = require('../../models/menu/kokteyller');
const PizzaMakarnaModel = require('../../models/menu/pizzamakarna');
const TatlilarModel = require('../../models/menu/tatlilar');
const YemekyanindaModel = require('../../models/menu/yemekyaninda');

const anayemek = async (req, res) => {
    const anaYemekData = await AnayemekModel.find();
    res.status(200).json(anaYemekData);
}

const alkoller = async (req, res) => {
    const alkollerData = await AlkollerModel.find();
    res.status(200).json(alkollerData);
}

const baslangiclar = async (req, res) => {
    const baslangicData = await BaslangicModel.find();
    res.status(200).json(baslangicData);
}

const burgerdurum = async (req, res) => {
    const burgerdurumData = await BurgerDurumModel.find();
    res.status(200).json(burgerdurumData);
}

const icecekler = async (req, res) => {
    const iceceklerData = await IceceklerModel.find();
    res.status(200).json(iceceklerData);
}

const kokteyller = async (req, res) => {
    const kokteyllerData = await KokteyllerModel.find();
    res.status(200).json(kokteyllerData);
}

const pizzamakarna = async (req, res) => {
    const pizzamakarnaData = await PizzaMakarnaModel.find();
    res.status(200).json(pizzamakarnaData);
}

const tatlilar = async (req, res) => {
    const tatlilarData = await TatlilarModel.find();
    res.status(200).json(tatlilarData);
}

const yemeginyaninda = async (req, res) => {
    const yemekyanindaData = await YemekyanindaModel.find();
    res.status(200).json(yemekyanindaData);
}


module.exports = { alkoller, anayemek, baslangiclar, burgerdurum, icecekler, kokteyller, pizzamakarna, tatlilar, yemeginyaninda };