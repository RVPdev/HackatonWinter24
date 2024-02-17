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
  user_dob: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
  user_gender: faker.person.sex(),
  user_occupation:faker.person.jobTitle(),
  user_company: faker.company.name(),
  user_weight: faker.helpers.rangeToNumber({ min: 90, max: 499 }),
  user_height:faker.helpers.rangeToNumber({ min: 53, max: 84 }),
  user_scheduled_time:"12:00",
  administer_access: faker.datatype.boolean(0.1),
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

