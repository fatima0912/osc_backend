

const mongoose = require('mongoose');

const schema = mongoose.Schema( { 
    firstName: {
        type: String,
        minLength: [3, 'Min. 3 characters'],
        maxLength: [50, 'Max 50 characters'],
        required: [true, 'First name is required']
    },
    lastName:String,
    mobile:Number,
    gender: String,
    age:Number,
    email:{
        type:String,
        unique: true,
        required: [true, 'Email is required'],
        validate: {
            validator: v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v),
            message: () => 'Invalid Email'
        }
    },
    password: {
        type:String,
        required: [true, 'Password is required'],
        validate: {
            validator: v => /^[a-z0-9\.@#\$%&]+$/.test(v),
            message: () => 'Invalid Password Pattern'        

                },
            }

}
);

const practiceModel = mongoose.model('user', schema);
module.exports = practiceModel;