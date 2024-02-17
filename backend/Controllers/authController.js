
//handles get request on /; redirects to homepage on views
async function handleIndex(req, res) {
    return res.send("Auth controller working ✅");
}

//handles post request on /registernewuser; registers new user
const UserHealthcare = require("../Models/UserHealthcare"); // assuming the model is exported from this path

async function handleRegisterUser(req, res) {
    const userData = req.body;

    try {
        const newUser = new UserHealthcare(userData);
        await newUser.save();
        console.log("New user registered: ", newUser);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.log("Error registering user: ", error.message);
        res.status(500).json({ message: "Error registering user", error: error.message });
    }
}

module.exports = { handleIndex, handleRegisterUser }
