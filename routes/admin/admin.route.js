const express = require('express');
const router = express.Router();

const signUp = require("../../controller/admin/signup.admin");
const signIn = require("../../controller/admin/signin.admin");


router.post("/signup", signUp.signup);
router.post("/signin", signIn.signin);

module.exports = router;