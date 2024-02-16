const router = require("express").Router();
const controller = require("./login.controller"); 

router.route("/").get(controller.list).post(controller.isEmailValid);

module.exports = router;
