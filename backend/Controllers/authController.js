// //importing database
// const userModel = require("../Models")

//handles get request on /; redirects to homepage on views
async function handleIndex(req, res) {
    return res.send("Auth controller working ✅");
}


module.exports = { handleIndex }