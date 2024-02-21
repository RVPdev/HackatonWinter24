const router = require("express").Router();
const controller = require("./admin.controller"); 
router.route("/:search_param").get(controller.findUsers);
router.route("/").get(controller.showAllUsers);
router.route("/:user_id").delete(controller.remove);

module.exports = router;