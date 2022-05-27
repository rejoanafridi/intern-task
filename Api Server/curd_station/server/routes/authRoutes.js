// jwt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const express = require("express");
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMyData,
} = require("../controller/authControler");

const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/mydata", protect, getMyData);

module.exports = router;
