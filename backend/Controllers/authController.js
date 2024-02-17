const UserHealthcare = require("../Models/UserHealthcare.js");
const {sendToken} = require("../Utils/sendToken.js");

const handleRegisterUser = async(req,res,next) => {
    const { name, age, phoneNumber, email, aadharNumber, password, isDiabetic, isHypertensive, isHypotensive, doctorName, doctorNumber, familyName, familyNumber } = req.body;

    if (!name || !age || !phoneNumber || !email || !aadharNumber || !password || !isDiabetic || !isHypertensive || !isHypotensive || !doctorName || !doctorNumber || !familyName || !familyNumber)
        return res.status(400).json({ message: "Please fill all the fields" });

        
    let user = await UserHealthcare.findOne({ email });

    if (user)
        return res.status(400).json({ message: "User already exists" });


    user = await UserHealthcare.create({
        name,
        age,
        mobileno: phoneNumber,
        email,
        aadharNo: aadharNumber,
        password,
        isDiabetic,
        haveHypertention: isHypertensive,
        haveHypotention: isHypotensive,
        doctor_name: doctorName,
        doctor_number: doctorNumber,
        family_name: familyName,
        family_number: familyNumber
    });

    sendToken(res, user, "User Registered Successfully", 201);
}

module.exports = { handleRegisterUser }
