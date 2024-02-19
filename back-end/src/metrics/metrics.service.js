const knex = require("../db/connection");

function create(newData) {
    return knex("health_metrics")
      .insert(newData)
      .returning("*")
      .then((insertData) => insertData[0]);
  }

function isUserExists(user_id) {
  return knex("user_information").select("*").where({ user_id: user_id });
}

function list(user_id) {
  return knex("")
    .select(
      knex.raw(
        "user_activity,user_mood ,user_sleep,user_stress,created_at from health_metrics hm"
      )
    )
    .where(
      knex.raw("hm.person_id =? order by hm.created_at desc limit 7", [user_id])
    );
}

function listActivity(user_id) {
  return knex("")
    .select(
      knex.raw(
        "user_activity,created_at from health_metrics hm"
      )
    )
    .where(
      knex.raw("hm.person_id =? order by hm.created_at desc limit 7", [user_id])
    );
}

function average(user_id) {
    return knex("")
    .select(
      knex.raw(
        "round(avg(hm.user_mood):: numeric, 0) as average_mood from health_metrics hm"
      )
    )
    .where(
      knex.raw("hm.person_id =?", [user_id])
    ).first();
}

function avgHappy(user_id) {
    return knex("")
    .select(
      knex.raw(
        "round(avg(hm.user_stress):: numeric, 0) as average_happy from health_metrics hm"
      )
    )
    .where(
      knex.raw("hm.person_id =?", [user_id])
    ).first();
}


module.exports = {
  create,
  isUserExists,
  list,
  average,
  avgHappy,
  listActivity
};
