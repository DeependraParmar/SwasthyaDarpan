//importing database
const databaseModal = require("../Models/database");

//handles get request on /; redirects to homepage on views
async function handleIndex(req, res) {
    return res.send("Node controller working ✅");
}

async function handleGetUserData(req,res){
    return res.send("Node controller getuserdata working ✅");
}

async function handleUserTransaction(req,res){
    return res.send("Node controller handleUserTransaction working ✅");
}

async function handleCallAmbulance(req,res){
    return res.send("Node controller handleCallAmbulance working ✅");
}

module.exports = { handleIndex, handleGetUserData , handleUserTransaction, handleCallAmbulance}