const express = require('express');
const router = express.Router();
const menu = require('../controller/menu/menu');


router.get('/alkoller', menu.alkoller);
router.get('/anayemek', menu.anayemek);
// router.get('/baslangiclar', menu.baslangiclar);
// router.get('/burgerdurum', menu.burgerdurum);
// router.get('/icecekler', menu.icecekler);
// router.get('/kokteyller', menu.kokteyller);
// router.get('/pizzamakarna', menu.pizzamakarna);
// router.get('/tatlilar', menu.tatlilar);
// router.get('/yemeginyaninda', menu.yemeginyaninda);


module.exports = router;