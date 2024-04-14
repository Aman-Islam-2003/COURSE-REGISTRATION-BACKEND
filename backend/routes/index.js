const { Router } = require("express");
const router = Router();

// Routers
const userRouter = require("./user.route.js");

router.use("/users", userRouter);



module.exports = router;
