const express = require('express');
const {addPhone,  verifyPhone } = require('../controllers/controller-auth-phone');
const router = express.Router();

router.post('/login', addPhone);
router.post('/signup', verifyPhone);


module.exports = {routes: router}