//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleIndex,
    handleGetUserData,
    handleUserTransaction,
    handleCallAmbulance
} = require("../Controllers/nodeController");


//routing to specific controller functions
router.get("/", handleIndex)         
router.get("/getuserdata", handleGetUserData)
router.get("/usertransaction", handleUserTransaction)
router.get("/callAmbulance", handleCallAmbulance)

//exporting router
module.exports = router;