const router = require("express").Router();
const controller = require("./signup.controller"); 

router.route("/additional_info/schedule_reminder").put(controller.add);
router.route("/additional_info").put(controller.update);
router.route("/").post(controller.create);

module.exports = router;
