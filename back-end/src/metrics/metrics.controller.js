const { query } = require("express");
const service = require("./metrics.service"); 

async function list(req,res,next){
     response = await service.list(); 
     return res.json({data: response})
}

module.exports = {
    list
}