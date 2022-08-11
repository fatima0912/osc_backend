const express = require('express');
const router= express.Router();
const defaultCtrl = require('../controller/defaultCtrl');


//const defaultCtrl = require('./controller/defaultCtrl.js');

router.get('/', defaultCtrl.home);
router.get('/health', defaultCtrl.health);
module.exports = router;