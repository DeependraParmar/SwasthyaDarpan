// //importing database
// const userModel = require("../Models")

async function handleIndex(req, res) {
    return res.send("Api controller working ✅");
}

// route to get predictions
async function handleGetPredictions(req,res){
    return res.send(" Predictions 📄");
}

// route to get predictions
async function handleGetUserData(req,res){
    return res.send(" userData 🤵");
}

module.exports = { handleIndex, handleGetPredictions, handleGetUserData }