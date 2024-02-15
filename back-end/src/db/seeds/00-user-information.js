const userInformation = require("./00-user-information.json");

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE "userInformation" RESTART IDENTITY CASCADE')
    .then(function () {
      return knex("userInformation").insert(userInformation);
    });
};
