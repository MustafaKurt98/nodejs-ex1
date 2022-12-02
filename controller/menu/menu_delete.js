const AlkollerModel = require('../../models/menu/alkoller');
const AnayemekModel = require('../../models/menu/anayemek');
const BaslangicModel = require('../../models/menu/baslangicsalata');
const BurgerDurumModel = require('../../models/menu/burgerdurum');
const IceceklerModel = require('../../models/menu/icecekler');
const KokteyllerModel = require('../../models/menu/kokteyller');
const PizzaMakarnaModel = require('../../models/menu/pizzamakarna');
const TatlilarModel = require('../../models/menu/tatlilar');
const YemekyanindaModel = require('../../models/menu/yemekyaninda');

const alkoller = async (req, res) => {
    const { _id } = req.body;
    const alkollerData = await AlkollerModel.findByIdAndDelete({_id: _id});
    res.status(200).json(alkollerData);
}

const anayemek = async (req, res) => {
    const { id } = req.body;
    const anaYemekData = await AnayemekModel.findByIdAndDelete(id);
    res.status(200).json(anaYemekData);
}

const baslangiclar = async (req, res) => {
    const { id } = req.body;
    const baslangicData = await BaslangicModel.findByIdAndDelete(id);
    res.status(200).json(baslangicData);
}

const burgerdurum = async (req, res) => {
    const { id } = req.body;
    const burgerdurumData = await BurgerDurumModel.findByIdAndDelete(id);
    res.status(200).json(burgerdurumData);
}

const icecekler = async (req, res) => {
    const { id } = req.body;
    const iceceklerData = await IceceklerModel.findByIdAndDelete(id);
    res.status(200).json(iceceklerData);
}

const kokteyller = async (req, res) => {
    const { id } = req.body;
    const kokteyllerData = await KokteyllerModel.findByIdAndDelete(id);
    res.status(200).json(kokteyllerData);
}

const pizzamakarna = async (req, res) => {
    const { id } = req.body;
    const pizzamakarnaData = await PizzaMakarnaModel.findByIdAndDelete(id);
    res.status(200).json(pizzamakarnaData);
}

const tatlilar = async (req, res) => {
    const { id } = req.body;
    const tatlilarData = await TatlilarModel.findByIdAndDelete(id);
    res.status(200).json(tatlilarData);
}

const yemeginyaninda = async (req, res) => {
    const { id } = req.body;
    const yemekyanindaData = await YemekyanindaModel.findByIdAndDelete(id);
    res.status(200).json(yemekyanindaData);
}

module.exports = {
    alkoller,
    anayemek,
    baslangiclar,
    burgerdurum,
    icecekler,
    kokteyller,
    pizzamakarna,
    tatlilar,
    yemeginyaninda
}