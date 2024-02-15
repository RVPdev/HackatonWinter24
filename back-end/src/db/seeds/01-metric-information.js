const tables = require("./01-metric-information.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE health_metrics RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("health_metrics").insert(tables);
    });
};
