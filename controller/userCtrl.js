const userRepo = require('../repo/userRepo');
const cryptoUtils =require('../utils/cryptoUtils')

const pwd = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass_length = 8;
    pass =""

    for (let i = 0; i < pass_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        pass += chars.substring(rnum, rnum +1) 
    }
    return pass;
}


const register = async (req, res)=>{
    try{
        const data = req.body;
        const uid = data.firstName + Math.round(Math.random() * 10000)
        data['uid'] = uid
        let pd = await pwd();
        
        const en = await cryptoUtils.getHash(pd)
        data['password'] = en;
        await userRepo.add(data);
        res.status(201);
        res.json({uid: uid, pwd: pd});
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.send("Intenal Server Error");
    }
    

};

const result = async(req, res) =>
{
    try{
        const shw = await userRepo.show();
        res.status(200);
        res.json(shw);
        
    }catch(e){
        console.log(e);
        res.status(500);
        res.send("cant show");
    }
};

const getUsers = async (req, res) => {
    try {
        const pageIndex = +req.params.page;
        const pageSize = +req.params.size;
        const totalRecords = await userRepo.getUserCount();
        const totalPages = Math.ceil(totalRecords / pageSize);
        const users = await userRepo.getUsers(pageIndex, pageSize);

        const response = {
            data: users,
            metadata: {
                totalRecords: totalRecords,
                totalPages: totalPages
            }
        };
        res.status(200);
        res.json(response);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}
// const deleteData = async(req, res) =>
// {
//     try{
//         const email= req.params.email;
//         await userRepo.deleteData(email);
//         res.status(201);
//         res.json();
//     }catch(e){
//         console.log(e);
//         res.status(500);
//         res.json("cant show");
//     }
// };


const login = async (req, res) => {
    const payload = req.body;
    const dbUser = await userRepo.getData(payload.uid);
    if (!dbUser) {
        res.status(401).send("Unauthorized");
        return;
    }
    const result = await cryptoUtils.compare(payload.password, dbUser.password);
    if (result) {
        // const token = cryptoUtils.getToken(dbUser);
        res.status(200).send("Logged In!");
    } else {
        res.status(401);
        res.send("Unauthorized");
    }
}

const update = async (req, res) => {
    try {
        const email= req.params.email;
        await userRepo.update(email, req.body);
         //console.log(req.body);
        res.status(204);
        res.send();
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
}

 const getData = async(req, res)=>{

    const email = req.params.email;
      userRepo.getData(email)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).send('Internal Server Error'));
};

 // res.status(201);
    // res.send(getdt);
   
// catch(e)
//     {
//         console.log(e);
//     res.status(500);
//     res.send("Internal Server Error");
// }
// };

const cntusr = async(req,res) =>{
    try{
        const cnt = await userRepo.getUserCount();
        res.status(201).json(cnt);
    }catch(e){
        res.status(500).json("internal Server Error");
    }
}
// deleteData,
module.exports = {register, result, getData, update,  cntusr, getUsers, login };