
const express = require('express');
const userCtrl = require('../controller/userCtrl');
// const fs = require('fs');
// const multer = require('multer');
const basicAuth = require('../middleware/basicAuth');
const router = express.Router();

// const dir = './uploads';
// if(!fs.existsSync(dir)) fs.mkdirSync(dir);

// const storage = multer.diskStorage({
//     destination : './uploads',
//     filename : function (req, file, cb) {
//         const uniqueToken = Date.now() + '-' + Math.round(Math.random()* 1E9);
//         const fileName = uniqueToken + '-' + file.originalname;
//         req.image = fileName;
//         cb(null,fileName);
//     }
// });

// const upload = multer({storage:storage});

router.post('/register', userCtrl.register);
router.get('/', userCtrl.result);
router.get('/count',userCtrl.cntusr);
router.get('/:email', userCtrl.getData);
router.put('/:email',basicAuth, userCtrl.update);
router.get('/page/:page/size/:size', userCtrl.getUsers);
//router.put('/:email',upload.single('image'), userCtrl.update);
// router.delete('/:email', userCtrl.deleteData);

module.exports = router;
