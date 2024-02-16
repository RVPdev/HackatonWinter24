const router = require("express").Router();
const controller = require("./signup.controller"); 

router.route("/").get(controller.list);

module.exports = router;
