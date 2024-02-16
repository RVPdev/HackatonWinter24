const user_information = require("./00-user-information.json");

// exports.seed = function (knex) {
//   return knex
//     .raw('TRUNCATE TABLE "user_information" RESTART IDENTITY CASCADE')
//     .then(function () {
//       return knex("user_information").insert(user_information);
//     });
// };

const {faker} = require("@faker-js/faker");

const createFakeUser = () => ({
  user_first_name: faker.person.firstName(), 
  user_last_name: faker.person.lastName(), 
  user_username: faker.internet.userName(), 
  user_password: faker.internet.password(),
  user_email: faker.internet.email(),
}); 

exports.seed = async function(knex,Promise) {
  const fakeUser = [...user_information]; 
  const desiredFakeUsers = 500;
  await knex.raw('TRUNCATE TABLE "user_information" RESTART IDENTITY CASCADE')
  for (let i =0; i< desiredFakeUsers; i++){
    fakeUser.push(createFakeUser());
  }
  await knex('user_information').insert(fakeUser);
};

