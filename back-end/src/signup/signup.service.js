const knex = require ("../db/connection");

function create(newUser){
    return knex("user_information")
    .insert(newUser)
    .returning("*")
    .then((createdUser)=>createdUser[0]);
}

module.exports={
    create
}
