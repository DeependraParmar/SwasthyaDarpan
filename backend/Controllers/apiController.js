const moment = require('moment');
const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "dc32a1c8",
  apiSecret: "xXGM7eZLqFDNqB07"
})


const date = moment().format('YYYY-MM-DD');
const time = moment().format('HH:mm:ss');

//handles post request on /registernewuser; registers new user
const UserHealthcare = require("../Models/UserHealthcare"); // assuming the model is exported from this path

async function handleIndex(req, res) {
    return res.send("Api controller working ✅");
}

// route to get predictions
async function handleGetPredictions(req,res){
    return res.send(" Predictions 📄");
}

// route to get user data
async function handleGetUserData(req, res) {
    const { userid } = req.body;

    try {
        const user = await UserHealthcare.findOne({ userid });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        res.send(user);
    } catch (error) {
        res.status(500).send({ message: "Error getting user data", error: error.message });
    }
}

// route to send SMS
async function handleSendSMS(req, res) {
    const { userid } = req.body;

    try {
        const user = await UserHealthcare.findOne({ userid });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const latestHealthData = user.healthData[user.healthData.length - 1];


        if (!latestHealthData) {
            return res.status(404).send({ message: "No health data found" });
        }

        //const message = `Latest health data: Heart Rate - ${latestHealthData.heartRate}, SpO2 - ${latestHealthData.spO2}, Glucose - ${latestHealthData.glucose}, Temperature - ${latestHealthData.temperature}`;

            const to = "919993234069"
            const text = 'Hello from SwasthyaDardpan AjPIs!';

          const from = "Vonage APIs"
            vonage.sms.send({to, from, text})
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });

        
        res.send({ message: "SMS sent successfully" });

    } catch (error) {
        res.status(500).send({ message: "Error sending SMS", error: error.message });
    }
}



module.exports = { handleIndex, handleGetPredictions, handleGetUserData, handleSendSMS }