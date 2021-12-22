const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate")

require("../db/connection");
const User = require("../model/userSchema");


// Save Data Using Async Await:


// for SignUp
router.post("/signup", async (req, res) => {

    const { firstName, lastName, email, password, cpassword, age, number, gender } = req.body;

    if (!firstName || !lastName || !email || !password || !cpassword || !age || !number || !gender) {
        return res.status(422).json({ error: "All Fields are mendatory !" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email Id already registered. Please Login !" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password does not match!" });
        }
        else {
            const user = new User({ firstName, lastName, email, password, cpassword, age, number, gender });

            await user.save();
            res.status(201).json({ message: "User Successfully Registered " });
        }
    }
    catch (err) {
        console.log(err);
    }
});


// for SignIn
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(422).json({ error: "All Fields are mendatory !" });
        }
        const userLogin = await User.findOne({ email: email });


        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid password Credentials" });
            }
            else {
                res.json({ message: "SignIn Successful" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid email Credentials" });
        }

    }
    catch (err) {
        console.log(err);
    }
});



// For Profile
router.get("/profile", authenticate, (req, res) => {
    res.send(req.rootUser);
});

// For Logout
router.get("/signout", (req, res) => {
    res.clearCookie("jwtoken", { path: "/" });
    res.status(200).send("Signout Successful");
});


module.exports = router;