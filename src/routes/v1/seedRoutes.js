const express = require("express");
const { seedData } = require("../../controllers/seedController");

const router = express.Router();

router.post('/seed',seedData);

module.exports = router;