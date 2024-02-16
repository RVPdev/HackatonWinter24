const knex = require("../db/connection")

function list(){
    return knex
    .select("*")
    .from("health_metrics");
}

module.exports={
    list
}