const express = require('express')
const router = express.Router();
const { handleRegisterUser, logout} = require("../Controllers/authController");


router.post("/register", handleRegisterUser)  
router.get("/logout", logout);

//exporting router
module.exports = router;