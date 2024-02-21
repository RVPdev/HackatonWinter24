const knex = require("../db/connection")

function listAll(){
    return knex("user_information")
    .where({administer_access: false})
    .select("*")
}
function findUser(search_param){
    return knex("")
    .select(
      knex.raw(
        "user_id,user_first_name ,user_last_name,user_email from user_information ui"
      )
    )
    .where('user_first_name','like',`%${search_param}%`)
    .orWhere('user_last_name','like',`%${search_param}%`)
    .orWhere('user_email','like',`%${search_param}%`)  
}
async function remove(user_id){
    try{
        const resp = await removeHealthMetrics(user_id);
        return removeUserInformation(user_id);
    }catch(error){
        return error;
    }
}
function removeHealthMetrics(user_id){
    return knex('health_metrics')
    .where('person_id',user_id)
    .del();
}
function removeUserInformation(user_id){
   return knex('user_information')
    .where('user_id',user_id)
    .del();
}
module.exports= {
    listAll, 
    findUser,
    remove
}