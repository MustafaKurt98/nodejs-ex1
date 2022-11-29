const express = require('express');
const router = express.Router();

const signUp = require("../controller/admin/signup.admin");


router.post("/signup", signUp.signup);

module.exports = router;