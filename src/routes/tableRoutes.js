const express = require("express");
const { validateLockRequest } = require("../middlewares/validateLockRequest");
const { lockTable, unlockTable, getTableStatus } = require("../controllers/tableController");
const { validateUnlockRequest } = require("../middlewares/validateUnlockRequest");

const router = express.Router();

router.post('/tables/lock',validateLockRequest,lockTable);
router.post('/tables/unlock',validateUnlockRequest,unlockTable);
router.get('/tables/:tableId/status',getTableStatus);

module.exports = router;