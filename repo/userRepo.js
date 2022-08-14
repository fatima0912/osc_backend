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

const getData =(uid)=>{
    return practiceModel.findOne({uid: uid});
    
   
};

const getUserCount = () => {
    return practiceModel.count();
}


module.exports= { add,
                  show,
                  getData, 
                  getUserCount,
                  getUsers 
                };















