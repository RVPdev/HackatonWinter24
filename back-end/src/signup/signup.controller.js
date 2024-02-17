const { query } = require("express");
const service = require("./signup.service");
const emailvalidator = require("email-validator");

const hasProperties = require("../errors/hasProperties");
const hasRequiredProperties = hasProperties(
  "user_first_name",
  "user_last_name",
  "user_password",
  "user_email"
);
const hasRequiredPropertiesAddInfo = hasProperties(
  "user_dob",
  "user_gender",
  "user_occupation",
  "user_company",
  "user_weight",
  "user_height"
);

async function isEmailValid(req, res, next) {
  const userEmailReq = req.body.data.user_email;
  if (emailvalidator.validate(userEmailReq)) {
    return next();
  } else {
    return next({
      status: 400,
      message: `Invalid email address: ${userEmailReq}`,
    });
  }
}

async function isEmailNotExists(req, res, next) {
  const email = req.body.data.user_email;
  let response;
  response = await service.isEmailNotExists(email);
  if (response.length === 0) {
    return next();
  } else {
    return next({
      status: 400,
      message: `Email: ${email} already exists`,
    });
  }
}
async function isPasswordValid(req, res, next) {
  let userPasswordReq = req.body.user_password;
  if (response.length === 0) {
    return next({
      status: 404,
      message: `Password ${userPasswordReq} is not correct`,
    });
  }
  return next();
}

function create(req, res, next) {
  service
    .create(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}
function update(req, res, next) {
    const {data={}} = req.body;
  service
    .update(data)
    .then((resp) => {
      const data = resp[0];
      res.status(200).json({ data });
    })
    .catch(next);
}

module.exports = {
  create: [hasRequiredProperties, isEmailValid, isEmailNotExists, create],
  update: [hasRequiredPropertiesAddInfo, update],
};
