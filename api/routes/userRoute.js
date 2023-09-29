const test = require ("node:test");

const express = require("express");

const router = express.Router();

router.get('/test', test);

module.exports = router;