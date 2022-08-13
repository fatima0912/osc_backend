const practiceModel = require('../model/practiceModel');

const add =(data) => {
    const practice = new practiceModel(data);
    return practice.save();
};

const show = ()=>{
    const projection = {__v:0, __id:0, password: 0};
    const filter = {};
    return practiceModel.find(filter, projection);
};

const getUsers = (pageIndex, pageSize) => {
    const projection = { __v: 0, _id: 0 };
    const filter = {};
    const skipRows = pageIndex * pageSize;
    return practiceModel.find(filter, projection)
        .skip(skipRows)
        .limit(pageSize);
};

const update = (email, data) => {
    const {  firstName, lastName, gender, age, mobile } = data;
    return practiceModel.updateOne({ email }, {
        $set: {
            firstName,
            lastName, 
            gender, 
            age, 
            mobile
        }
    });
};

const getData =(uid)=>{
    return practiceModel.findOne({uid: uid});
    
    // or
    // const projection = {__v:0, __id:0};
    // const filter = {email};
    // return practiceModel.findOne(filter, projection);
};

const getUserCount = () => {
    return practiceModel.count();
}


// const deleteData = (email)=>{
//    return practiceModel.findOneAndDelete({email: email});
//     // return practiceModel.save();
// } 
// deleteData
module.exports= { add,
                  show,
                  getData, 
                  update,
                  getUserCount,
                  getUsers 
                };