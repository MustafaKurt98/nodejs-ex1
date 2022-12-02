const AlkollerModel = require('../../models/menu/alkoller');
const AnayemekModel = require('../../models/menu/anayemek');
const BaslangicModel = require('../../models/menu/baslangicsalata');
const BurgerDurumModel = require('../../models/menu/burgerdurum');
const IceceklerModel = require('../../models/menu/icecekler');
const KokteyllerModel = require('../../models/menu/kokteyller');
const PizzaMakarnaModel = require('../../models/menu/pizzamakarna');
const TatlilarModel = require('../../models/menu/tatlilar');
const YemekyanindaModel = require('../../models/menu/yemekyaninda');
const fs = require('fs');

const anayemek = async (req, res) => {
    fs.readFile('./assets/json2/anayemekler.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const anaYemekData = await JSON.parse(data);
            AnayemekModel.insertMany(anaYemekData).then(function () {
                console.log("Data inserted")
                res.status(200).json(anaYemekData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });

}

const alkoller = async (req, res) => {
    fs.readFile('./assets/json2/alkoller.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const alkollerData = await JSON.parse(data);
            AlkollerModel.insertMany(alkollerData).then(function () {
                console.log("Data inserted")
                res.status(200).json(alkollerData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });
}

const baslangiclar = async (req, res) => {
    fs.readFile('./assets/json2/baslangicsalata.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const baslangicData = await JSON.parse(data);
            BaslangicModel.insertMany(baslangicData).then(function () {
                console.log("Data inserted")
                res.status(200).json(baslangicData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });

}

const burgerdurum = async (req, res) => {
    fs.readFile('./assets/json2/burgerdurum.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const burgerdurumData = await JSON.parse(data);
            BurgerDurumModel.insertMany(burgerdurumData).then(function () {
                console.log("Data inserted")
                res.status(200).json(burgerdurumData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });

}

const icecekler = async (req, res) => {
    fs.readFile('./assets/json2/icecekler.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const iceceklerData = await JSON.parse(data);
            IceceklerModel.insertMany(iceceklerData).then(function () {
                console.log("Data inserted")
                res.status(200).json(iceceklerData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });

}

const kokteyller = async (req, res) => {
    fs.readFile('./assets/json2/kokteyller.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const kokteyllerData = await JSON.parse(data);
            KokteyllerModel.insertMany(kokteyllerData).then(function () {
                console.log("Data inserted")
                res.status(200).json(kokteyllerData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });
}

const pizzamakarna = async (req, res) => {
    fs.readFile('./assets/json2/pizzamakarna.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const pizzamakarnaData = await JSON.parse(data);
            PizzaMakarnaModel.insertMany(pizzamakarnaData).then(function () {
                console.log("Data inserted")
                res.status(200).json(pizzamakarnaData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });
}

const tatlilar = async (req, res) => {
    fs.readFile('./assets/json2/tatli.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const tatlilarData = await JSON.parse(data);
            TatlilarModel.insertMany(tatlilarData).then(function () {
                console.log("Data inserted")
                res.status(200).json(tatlilarData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });
}

const yemeginyaninda = async (req, res) => {
    fs.readFile('./assets/json2/yemeginyaninda.json', 'utf8', async (err, data) => {
        if (err) {
            res.status(500).json({ msg: 'Hata oluştu' });
        } else {
            const yemekyanindaData = await JSON.parse(data);
            YemekyanindaModel.insertMany(yemekyanindaData).then(function () {
                console.log("Data inserted")
                res.status(200).json(yemekyanindaData);
                // Success
            }).catch(function (error) {
                res.status(500).json({ msg: 'Hata oluştu' });
                console.log(error)      // Failure
            });
        }
    });
}


module.exports = { alkoller, anayemek, baslangiclar, burgerdurum, icecekler, kokteyller, pizzamakarna, tatlilar, yemeginyaninda };