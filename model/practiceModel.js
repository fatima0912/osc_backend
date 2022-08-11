

const mongoose = require('mongoose');

const schema = mongoose.Schema(
{
    email:String,
    password:String,
    education:String,
    dd:Number,
    image:String
});

const practiceModel = mongoose.model('user', schema);
module.exports = practiceModel;