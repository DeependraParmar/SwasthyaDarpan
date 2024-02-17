const express = require('express')
const router = express.Router();
const { handleIndex, handleRegisterUser} = require("../Controllers/authController");


router.get("/", handleIndex)    
router.post("/registernewuser", handleRegisterUser)     

//exporting router
module.exports = router;