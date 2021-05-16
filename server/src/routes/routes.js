const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controllers");

router.get("/dashboard", controllers.dashboard);

module.exports = router;