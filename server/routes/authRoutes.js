/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const cors = require("cors");

// const { test, registerUser } = require("../controllers/authController");
// //middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// router.post("/register", registerUser);

module.exports = router;
