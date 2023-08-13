const router = require("express").Router();
// const { } = require("../models");

router.get("/", (req, res) => {
  res.send("I love coding!");
});



module.exports = router;
