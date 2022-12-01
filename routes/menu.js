const express = require('express');
const router = express.Router();
const MenuModel = require('../models/menu/menu.model');
const menu = require('../controller/menu/menu');


router.get('/pizza', menu.pizza);
router.get('/alkoller', menu.alkoller);


module.exports = router;