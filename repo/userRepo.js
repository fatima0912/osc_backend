const practiceModel = require('../model/practiceModel');

const add =(data) => {
    const practice = new practiceModel(data);
    return practice.save();
};

const show = ()=>{
    const projection = {__v:0, __id:0};
    const filter = {};
    return practiceModel.find(filter, projection);
};


const update = (email, data) => {
    const {  education,
            dd } = data;
    return practiceModel.updateOne({ email }, {
        $set: {
           education,
           dd
        }
    });
};

const getData =(email)=>{
    return practiceModel.findOne({email: email});
    
    // or
    // const projection = {__v:0, __id:0};
    // const filter = {email};
    // return practiceModel.findOne(filter, projection);
};

const getUserCount = () => {
    return practiceModel.count();
}


const deleteData = (email)=>{
   return practiceModel.findOneAndDelete({email: email});
    // return practiceModel.save();
}
module.exports= { add,
                  show,
                  getData, 
                  update,
                  getUserCount,
                  deleteData
                };