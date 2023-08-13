const router = require("express").Router();
const { User } = require("../../models");

const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
