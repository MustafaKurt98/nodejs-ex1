const MenuModel = require('../../models/menu/menu.model');
const AlkollerModel = require('../../models/menu/alkoller');
const AnayemekModel = require('../../models/menu/anayemek');
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
    /* fs.readFile('./assets/json2/alkoller.json', 'utf8', async (err, data) => {
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
    }); */

    const alkollerData = await AlkollerModel.find();
    res.status(200).json(alkollerData);

}





module.exports = { alkoller, anayemek };