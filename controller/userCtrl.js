const userRepo = require('../repo/userRepo');

const register = async (req, res)=>{
    try{
        const data = req.body;
        data.d4 = Date.now();
        await userRepo.add(data);
        res.status(201);
        res.json("data added");
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

const deleteData = async(req, res) =>
{
    try{
        const email= req.params.email;
        await userRepo.deleteData(email);
        res.status(201);
        res.json();
    }catch(e){
        console.log(e);
        res.status(500);
        res.json("cant show");
    }
};

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

module.exports = {register, result, getData, update, deleteData, cntusr };