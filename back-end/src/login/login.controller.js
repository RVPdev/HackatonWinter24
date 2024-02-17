const service = require("./login.service");
const hasProperties = require("../errors/hasProperties");
const hasRequiredProperties = hasProperties(
    "user_email",
    "user_password",
  );



function login(req,res,next){
    service
    .list(req.body.data)
    .then((data)=>res.status(201).json({data}))
    .catch(next)
}

// const { query } = require("express");
// const service = require("./login.service");

// async function list(req,res,next){
//      response = await service.list();
//      return res.json({data: response})
// }

// async function isEmailValid(req,res,next){
//     let userEmailReq = req.body.user_email;
//     const response = await service.checkUserEmail(userEmailReq);
//     console.log(response);
//     if (response.length === 0){
//         return next({
//             status: 404,
//             message: `Login ${userEmailReq} does not exist`
//         });
//     }
//     return res.json({message:"user found"});
// }

// async function isPasswordValid(req,res,next){
//     let userPasswordReq = req.body.user_password;
//     const response = await service.checkUserPassword(userPasswordReq);
//     console.log(response);
//     if (response.length === 0){
//         return next({
//             status: 404,
//             message: `Password ${userPasswordReq} is not correct`
//         });
//     }
//     return res.json({message:"password correctly entered"});
// }

module.exports = {
    login:[
        hasRequiredProperties,
        login
    ]    
}
