const express = require("express");
const router = express.Router();
const {handleUserSignUP, handleUserLogin} = require("../controllers/users");

router.post("/signup", handleUserSignUP);
router.post("/login", handleUserLogin);

module.exports = router;