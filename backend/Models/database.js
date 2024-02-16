//connect to mongodb
const mongoose = require("mongoose")

//database url with  /databaseName
const url = "mongodb://127.0.0.1:27017/database";

//connecting to database
try {
    mongoose.connect(url);
    console.log("connected to database");
} catch (error) {
    console.log("database connection failed");
}

const mongoose = require("mongoose");

// Create a schema for the healthcare app
const userHealthcareSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobileno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    aadharNo: {
        type: Number,
        required: true
    },
    isDiabetic: {
        type: Boolean,
        required: true
    },
    haveHypertention: {
        type: Boolean,
        required: true
    },
    haveHypotention: {
        type: Boolean,
        required: true
    },
    doctor_name: {
        type: String,
        required: true
    },
    doctor_address: {
        type: String,
        required: true
    },
    doctor_number: {
        type: Number,
        required: true
    },
    family1_name: {
        type: String,
        required: true
    },
    family1_number: {
        type: Number,
        required: true
    },
    family1_relation: {
        type: String,
        required: true
    },
    family2_name: {
        type: String,
        required: true
    },
    family2_number: {
        type: Number,
        required: true
    },
    family2_relation: {
        type: String,
        required: true
    },
    healthData: [
        {
            created_at: Date.now(),
            heartRate: Number,
            spO2: Number,
            glucose: Number,
            temperature: Number
        }
    ]
}, { timestamps: true });

// Create a model from the schema
const UserHealthcare = mongoose.model('UserHealthcare', userHealthcareSchema);

// Export the model
module.exports = UserHealthcare;