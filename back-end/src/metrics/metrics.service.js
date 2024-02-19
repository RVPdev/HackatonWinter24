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
//select ui.user_first_name, ui.user_last_name, case when ui.administer_access is null then false else ui.administer_access end, hm.user_activity, hm.user_sleep, hm.user_stress from health_metrics hm inner join user_information ui on	ui.user_id = hm.person_id where hm.person_id =12 order by hm.created_at limit 7
function list(user_id) {
  return knex("")
    .select(
      knex.raw(
        "ui.user_first_name, ui.user_last_name, case when ui.administer_access is null then false else ui.administer_access end, hm.user_activity, hm.user_sleep, hm.user_stress from health_metrics hm inner join user_information ui on	ui.user_id = hm.person_id"
      )
    )
    .where(
      knex.raw("hm.person_id =? order by hm.created_at limit 7 ", [user_id])
    );
}

function average(user_id) {
  return knex("")
    .select(
      knex.raw(
        "round(avg(hm.user_mood):: numeric, 0) as average_mood from health_metrics hm"
      )
    )
    .where(knex.raw("hm.person_id =?", [user_id]))
    .first();
}

function avgHappy(user_id) {
  return knex("")
    .select(
      knex.raw(
        "round(avg(hm.user_stress):: numeric, 0) as average_happy from health_metrics hm"
      )
    )
    .where(knex.raw("hm.person_id =?", [user_id]))
    .first();
}

module.exports = {
  create,
  isUserExists,
  list,
  average,
  avgHappy,
};
