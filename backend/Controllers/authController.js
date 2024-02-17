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

const login = async(req,res,next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("All Fields are Required", 400));
    }

    const user = await UserHealthcare.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorHandler("User Doesn't Exist. Please Register First", 401));
    }

    const isMatched = password === user.password;

    if (!isMatched)
        return next(new ErrorHandler("Incorrect Email or Password", 401));


    sendToken(res, user, `Welcome back, ${user.name}`, 200);
}

const logout = async(req,res,next) => {
        res.clearCookie("connect.sid");
        res.status(200).json({
            success: true,
            message: "Logged out successfully",
        })
}
module.exports = { handleRegisterUser, logout, login }
