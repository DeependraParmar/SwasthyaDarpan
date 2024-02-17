const express = require('express')
const router = express.Router();
const { handleRegisterUser} = require("../Controllers/authController");


router.post("/register", handleRegisterUser)  

//exporting router
module.exports = router;