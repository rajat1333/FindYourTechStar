/* eslint-disable quotes */
const express = require("express");

const router = express.Router();

// Import match Controller
const getAllUsers = require("../controllers/user");

router.get("/", getAllUsers);

module.exports = router;
