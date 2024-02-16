// const { query } = require("express");
const service = require("./login.service"); 

async function list(req,res,next){
     response = await service.list(); 
     return res.json({data: response})
}

async function isEmailValid(req,res,next){
    let useremailReq = req.body.user_email;
    const response = await service.checkUser(useremailReq);
    console.log(response);
    if (response.length === 0){
        return next({
            status: 404, 
            message: `Login ${useremailReq} does not exist`
        });
    }
    return res.json({message:"user found"});
}

module.exports = {
    list,
    isEmailValid
}