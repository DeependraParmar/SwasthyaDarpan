//connect to mongodb
const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//database url with  /databaseName
const url = "mongodb://127.0.0.1:27017/database";

//connecting to database
try {
    mongoose.connect(url);
    console.log("connected to database");
} catch (error) {
    console.log("database connection failed");
}

// Create a schema for the healthcare app
const schema = new mongoose.Schema({
    userid: {
        type: String,
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
    password: {
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
    doctor_number: {
        type: Number,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    family_number: {
        type: Number,
        required: true
    },
    healthData: [
        {
            created_at: { type: Date, default: Date.now },
            heartRate: Number,
            spO2: Number,
            glucose: Number,
            temperature: Number
        }
    ]
}, { timestamps: true });

// Create a model from the schema

schema.methods.getJWTToken = function() {
    return jwt.sign({ _id: this._id }, "tiuieruqijkvmsa.df;atruakjflkj", {
        expiresIn: "15d",
    }, {
        algorithm: 'HS256'
    });
}

// Export the model
const UserHealthcare = mongoose.model('UserHealthcare', schema);
module.exports = UserHealthcare;