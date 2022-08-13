//const bodyParser = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/index');
const defaultRouter = require('./router/defaultRouter');
const userRouter = require('./router/userRouter');
const cors = require('cors');

// const defaultCtrl = require('./controller/defaultCtrl.js');
const port = 3000;
//const port = process.env.PORT || 3000;
app.use(cors());

 app.listen(port, () => {
    console.log(`Server is running on ${port}`)
 }); 
 
app.use(bodyParser.json());

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to mongodb'))
    .catch(err => console.log('failed to connect to db'));
app.use('/', defaultRouter);
app.use('/user', userRouter);
// app.get('/hello', function(req, res){
//     res.send("welcome to node js");
// })