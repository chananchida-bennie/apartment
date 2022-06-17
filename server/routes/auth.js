const express = require("express");
const router = express.Router();

const { createRegister, login} = require("../controllers/auth");

router.post("/register", createRegister);
router.post("/login", login);



module.exports = router;