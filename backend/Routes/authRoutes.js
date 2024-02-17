//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleIndex,
    handleRegisterUser,
} = require("../Controllers/authController");


//routing to specific controller functions
router.get("/", handleIndex)    
router.post("/registernewuser", handleRegisterUser)     

//exporting router
module.exports = router;