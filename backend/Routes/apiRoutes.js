//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleIndex,
    handleGetPredictions,
    handleGetUserData
} = require("../Controllers/apiController");


//routing to specific controller functions
router.get("/", handleIndex) 
router.get("/getpredictions", handleGetPredictions)  
router.get("/getUserData", handleGetUserData)  

//exporting router
module.exports = router;