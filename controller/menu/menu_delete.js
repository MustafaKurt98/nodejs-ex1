const AlkollerModel = require('../../models/menu/alkoller-model');
const AnayemekModel = require('../../models/menu/anayemek-model');
const BaslangicModel = require('../../models/menu/baslangicsalata-model');
const BurgerDurumModel = require('../../models/menu/burgerdurum-model');
const IceceklerModel = require('../../models/menu/icecekler-model');
const KokteyllerModel = require('../../models/menu/kokteyller-model');
const PizzaMakarnaModel = require('../../models/menu/pizzamakarna-model');
const TatlilarModel = require('../../models/menu/tatlilar-model');
const YemekyanindaModel = require('../../models/menu/yemekyaninda-model');


const alkoller = async (req, res) => {
    const { _id, groupName, altGroupName } = req.body;
    if (!_id || !groupName) {
        res.status(400).json({ message: 'id is required' });
    } else if (_id != "" && groupName != "") {
        await AlkollerModel.find()
            .then((data) => {
                data.map((item) => {
                    if (item[groupName]) {
                        if (item[groupName][altGroupName]) {
                            item[groupName][altGroupName].map((item2, index) => {
                                if (item2._id == _id) {
                                    item2.remove();
                                } 
                            })
                            item.save();
                        } else {
                            item[groupName].map((item, index) => {
                                if (item._id == _id) {
                                    item.remove();
                                } 
                            })
                            item.save();
                        }

                    } else {
                        item.map((item, index) => {
                            if (item._id == _id) {
                                item.remove();
                            } 
                        })
                        item.save();
                    }

                })
                res.status(200).json(data);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    } else {
        res.status(400).json({ message: 'id is required' });
    }
}



const anayemek = async (req, res) => {
    const { _id } = req.body;
    const anayemekData = await AnayemekModel.find()
    anayemekData.map((item, index) => {
        let anayemekler = item["ANA YEMEKLER"]
        try {
            anayemekler.findByIdAndDelete({_id:_id}, (err, data) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({ message: "error1" });
                } else {
                    res.status(200).json({ message: "success" });
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "error2" });
        }
    })
}

const baslangiclar = async (req, res) => {
    const { _id } = req.body;
    const baslangicData = await BaslangicModel.findByIdAndDelete(id);
    res.status(200).json(baslangicData);
}

const burgerdurum = async (req, res) => {
    const { _id } = req.body;
    const burgerdurumData = await BurgerDurumModel.findByIdAndDelete(id);
    res.status(200).json(burgerdurumData);
}

const icecekler = async (req, res) => {
    const { _id } = req.body;
    const iceceklerData = await IceceklerModel.findByIdAndDelete(id);
    res.status(200).json(iceceklerData);
}

const kokteyller = async (req, res) => {
    const { _id } = req.body;
    const kokteyllerData = await KokteyllerModel.findByIdAndDelete(id);
    res.status(200).json(kokteyllerData);
}

const pizzamakarna = async (req, res) => {
    const { _id } = req.body;
    const pizzamakarnaData = await PizzaMakarnaModel.findByIdAndDelete(id);
    res.status(200).json(pizzamakarnaData);
}

const tatlilar = async (req, res) => {
    const { _id } = req.body;
    const tatlilarData = await TatlilarModel.findByIdAndDelete(id);
    res.status(200).json(tatlilarData);
}

const yemeginyaninda = async (req, res) => {
    const { _id } = req.body;
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