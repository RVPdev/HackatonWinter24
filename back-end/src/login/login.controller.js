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



module.exports = {
    login:[
        hasRequiredProperties,
        login
    ]    
}
