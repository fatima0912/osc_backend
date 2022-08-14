const express = require('express');
const userCtrl = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', userCtrl.register);
router.get('/', userCtrl.result);
router.get('/count',userCtrl.cntusr);
router.post('/login', userCtrl.login);
router.get('/:email', userCtrl.getData);
router.get('/page/:page/size/:size', userCtrl.getUsers);

module.exports = router;












