const router = require("express").Router();
const controller = require("./metrics.controller"); 

router.route("/:user_id").get(controller.list).get(controller.listActivity);
router.route("/").post(controller.create);

module.exports = router;