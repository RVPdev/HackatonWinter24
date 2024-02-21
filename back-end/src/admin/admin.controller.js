const service = require("./admin.service");


function showAllUsers(req, res, next) {
  service
    .listAll(req.body.data)
    .then((data) => res.status(201).json({ data }))
    .catch(next);
}
async function findUsers(req, res, next) {
  try {
    const data = await service.findUser(req.params.search_param);
    res.status(200).json({ data });
  } catch (error) {
    next();
  }
}
async function remove(req, res, next) {
  try {
    const data = await service.remove(req.params.user_id);
    res.status(200).json({ data });
  } catch (error) {
    next();
  }
}
module.exports = {
  showAllUsers: [showAllUsers],
  findUsers: [findUsers],
  remove: [remove],
};