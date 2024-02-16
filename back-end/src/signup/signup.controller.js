const { query } = require("express");
const service = require("./signup.service"); 

async function list(req,res,next){
     return res.json({data: "success"});
}

function create (req, res, next){
    service
    .create(req.body.data)
    .then((data) => res.status(201).json({data}))
    .catch(next);
}

module.exports = {
    list,
    create
}