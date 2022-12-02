const express = require('express');
const router = express.Router();
const menuRead = require('../controller/menu/menu_read');
const menuCreate = require('../controller/menu/menu_create');
const menuDelete = require('../controller/menu/menu_delete');


router.get('/alkoller', menuRead.alkoller);
router.get('/anayemek', menuRead.anayemek);
router.get('/baslangiclar', menuRead.baslangiclar);
router.get('/burgerdurum', menuRead.burgerdurum);
router.get('/icecekler', menuRead.icecekler);
router.get('/kokteyller', menuRead.kokteyller);
router.get('/pizzamakarna', menuRead.pizzamakarna);
router.get('/tatlilar', menuRead.tatlilar);
router.get('/yemeginyaninda', menuRead.yemeginyaninda);

router.post('/alkoller', menuCreate.alkoller);
router.post('/anayemek', menuCreate.anayemek);
router.post('/baslangiclar', menuCreate.baslangiclar);
router.post('/burgerdurum', menuCreate.burgerdurum);
router.post('/icecekler', menuCreate.icecekler);
router.post('/kokteyller', menuCreate.kokteyller);
router.post('/pizzamakarna', menuCreate.pizzamakarna);
router.post('/tatlilar', menuCreate.tatlilar);
router.post('/yemeginyaninda', menuCreate.yemeginyaninda);


router.post('/alkoller', menuDelete.alkoller);
// router.delete('/anayemek', menuDelete.anayemek);
// router.delete('/baslangiclar', menuDelete.baslangiclar);
// router.delete('/burgerdurum', menuDelete.burgerdurum);
// router.delete('/icecekler', menuDelete.icecekler);
// router.delete('/kokteyller', menuDelete.kokteyller);
// router.delete('/pizzamakarna', menuDelete.pizzamakarna);
// router.delete('/tatlilar', menuDelete.tatlilar);
// router.delete('/yemeginyaninda', menuDelete.yemeginyaninda);


module.exports = router;