
const config = require('../config');
const mongoose = require('mongoose');

const home = (req, res)=>{
    res.status(201);
    res.send("Practise Api");
};

const health = async (req, res) => { 
try {
    await mongoose.connect(config.dbConStr);
    res.status(201);
    res.json({ db:'up'});
} catch (e) { 
    console.log(e);
    res.status(500);
    res.send('Internal Server Error');
}   
     // mongoose.connection.close();   //logger.error({ message: 'Failed to connect to db', error: e });
};




module.exports = {home, health};