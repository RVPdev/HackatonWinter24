const knex = require("../db/connection")

function list(){
    return knex
    .select("*")
    .from("user_information");
}

function checkUser(useremailReq){
    return knex("user_information")
    .select("*")
    .where({user_email:useremailReq})
}

module.exports={
    list,
    checkUser
}