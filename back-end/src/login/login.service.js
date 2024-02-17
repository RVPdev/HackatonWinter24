const knex = require("../db/connection")

function list(userData){
    return knex("user_information")
    .where({user_email: userData.user_email,user_password:userData.user_password})
    .select("*")
    .first();
}

module.exports={
    list
}