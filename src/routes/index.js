
const express = require("express");
const { seedRoutes } = require("./v1");

const router = express.Router();

router.use('/v1',seedRoutes);

module.exports = router;