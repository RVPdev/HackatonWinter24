const { query } = require("express");
const service = require("./metrics.service");
const hasProperties = require("../errors/hasProperties");
const moment = require("moment");
const hasRequiredProperties = hasProperties(
    "person_id",
    "user_activity",
    "user_mood",
    "user_sleep",
    "user_stress"
);

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
    if(dashboardResp.length>0){
      const activityObj={
        seriesname:"Activity",
        data:[]
      }
      const sleepObj={
        seriesname:"Sleep",
        data:[]
      };
      const stressObj={
        seriesname:"Stress",
        data:[]
      };
      dashboardResp.forEach(item=>{
        const aObj={value:item.user_activity};
        const slObj={value:item.user_sleep};
        const stObj={value:item.user_stress};
        activityObj.data.push(aObj);
        sleepObj.data.push(slObj);
        stressObj.data.push(stObj);
      })
      const result = {
        user_first_name:dashboardResp[0].user_first_name,
        user_last_name:dashboardResp[0].user_last_name,
        administer_access:dashboardResp[0].administer_access,
        dataset:[]
      }
      result.dataset.push(activityObj);
      result.dataset.push(sleepObj);
      result.dataset.push(stressObj);
      const averageMood = await service.average(req.params.user_id);
      const averageHappy = await service.avgHappy(req.params.user_id);
      dashboardResp.forEach((item) => {
        item.created_at = moment(item.created_at).format("dddd");
      });
      res
        .status(200)
        .json({data:{ ...result, ...averageMood, ...averageHappy}});
    }else{
      res.status(200).json({result:'No data found'})
    }
  } catch (error) {
    next();
  }
}


function create(req, res, next) {
    service
      .create(req.body.data)
      .then((data) => res.status(201).json({ data }))
      .catch(next);
  }

  async function isUserValid(req, res, next) {
    const id = req.body.data.person_id;
    let response;
    response = await service.isUserExists(id);
    if (response.length === 0) {
        return next({
          status: 400,
          message: `ID ${id} does not exists`,
        });
    } else {
        return next();
    }
  }

module.exports = {
  list: [isUser, list],
  create:[hasRequiredProperties,isUserValid,create]
};
