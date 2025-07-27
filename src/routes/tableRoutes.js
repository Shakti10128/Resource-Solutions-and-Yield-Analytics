const express = require("express");
const { validateLockRequest } = require("../middlewares/validateLockRequest");
const { lockTable } = require("../controllers/tableController");

const router = express.Router();

router.post('/tables/lock',validateLockRequest,lockTable);

module.exports = router;