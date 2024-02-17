//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleIndex,
    handleGetPredictions,
    handleGetUserData,
    handleSendSMS
} = require("../Controllers/apiController");


//routing to specific controller functions
router.get("/", handleIndex) 
router.get("/getpredictions", handleGetPredictions)  
router.post("/getUserData", handleGetUserData) 
router.post("/sendSMS", handleSendSMS) 

//exporting router
module.exports = router;