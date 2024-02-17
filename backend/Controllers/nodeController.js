//handles post request on /registernewuser; registers new user
const UserHealthcare = require("../Models/UserHealthcare"); // assuming the model is exported from this path

//handles get request on /; redirects to homepage on views
async function handleIndex(req, res) {
    return res.send("Node controller working ✅");
}

async function handleUserTransaction(req, res) {
    const { userid, healthData } = req.body;

    try {
        const user = await UserHealthcare.findOne({ userid });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        user.healthData.push(healthData);
        await user.save();

        return res.status(201).send({ message: "data added" });
    } catch (error) {
        res.status(500).send({ message: "Error adding health data", error: error.message });
    }
}


async function handleCallAmbulance(req,res){
    return res.send("Node controller handleCallAmbulance working ✅");
}

module.exports = { handleIndex,  handleUserTransaction, handleCallAmbulance}