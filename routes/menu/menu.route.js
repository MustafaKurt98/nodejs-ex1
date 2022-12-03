const express = require('express');
const router = express.Router();
const menuRead = require('../../controller/menu/menu_read');
const menuCreate = require('../../controller/menu/menu_create');
const menuDelete = require('../../controller/menu/menu_delete');

router.get('/get/alkoller', menuRead.alkoller);
router.get('/get/anayemek', menuRead.anayemek);
router.get('/get/baslangiclar', menuRead.baslangiclar);
router.get('/get/burgerdurum', menuRead.burgerdurum);
router.get('/get/icecekler', menuRead.icecekler);
router.get('/get/kokteyller', menuRead.kokteyller);
router.get('/get/pizzamakarna', menuRead.pizzamakarna);
router.get('/get/tatlilar', menuRead.tatlilar);
router.get('/get/yemeginyaninda', menuRead.yemeginyaninda);


router.post('/create/alkoller', menuCreate.alkoller);
router.post('/create/anayemek', menuCreate.anayemek);
router.post('/create/baslangiclar', menuCreate.baslangiclar);
router.post('/create/burgerdurum', menuCreate.burgerdurum);
router.post('/create/icecekler', menuCreate.icecekler);
router.post('/create/kokteyller', menuCreate.kokteyller);
router.post('/create/pizzamakarna', menuCreate.pizzamakarna);
router.post('/create/tatlilar', menuCreate.tatlilar);
router.post('/create/yemeginyaninda', menuCreate.yemeginyaninda);


router.post('/delete/alkoller', menuDelete.alkoller);
router.post('/delete/anayemek', menuDelete.anayemek);
router.post('/delete/baslangiclar', menuDelete.baslangiclar);
router.post('/delete/burgerdurum', menuDelete.burgerdurum);
router.post('/delete/icecekler', menuDelete.icecekler);
router.post('/delete/kokteyller', menuDelete.kokteyller);
router.post('/delete/pizzamakarna', menuDelete.pizzamakarna);
router.post('/delete/tatlilar', menuDelete.tatlilar);
router.post('/delete/yemeginyaninda', menuDelete.yemeginyaninda);



module.exports = router;