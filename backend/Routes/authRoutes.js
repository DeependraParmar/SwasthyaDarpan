const express = require('express')
const router = express.Router();
const { handleRegisterUser, logout, login} = require("../Controllers/authController");


router.post("/register", handleRegisterUser)  
router.get("/logout", logout);
router.post("/login", login);

//exporting router
module.exports = router;