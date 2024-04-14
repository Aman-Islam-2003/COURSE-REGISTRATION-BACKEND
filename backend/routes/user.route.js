const {Router} = require("express");
const router = Router()

//controller
const controller = require("../controllers/user.controller");

const allowRole = require("../middlewares/allowRole.middleware");
const checkRole = require("../middlewares/checkRole");

//login
router.route("/login").post(controller.login);

//create course
router.route("/createCourse").post(allowRole("Admin"),checkRole,controller.login);


module.exports = router;