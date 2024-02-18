const { query } = require("express");
const service = require("./metrics.service");
const hasProperties = require("../errors/hasProperties");
const moment = require("moment");
// const hasRequiredProperties = hasProperties(
//     "person_id",
//     "user_activity",
//     "user_mood",
//     "user_sleep",
//     "user_stress"
// );

async function isUser(req, res, next) {
  const id = req.params.user_id;
  let response;
  response = await service.isUserExists(id);
  if (response.length === 0) {
    return next({
      status: 400,
      message: `This ${id} does not exist`,
    });
  } else {
    return next();
  }
}

async function list(req, res, next) {
  try {
    const dashboardResp = await service.list(req.params.user_id);
    const averageMood = await service.average(req.params.user_id);
    const averageHappy = await service.avgHappy(req.params.user_id);
    dashboardResp.forEach((item) => {
      item.created_at = moment(item.created_at).format("dddd");
    });
    res
      .status(200)
      .json({ dashboard: dashboardResp, ...averageMood, ...averageHappy});
  } catch (error) {
    next();
  }
}


module.exports = {
  list: [isUser, list],
};
