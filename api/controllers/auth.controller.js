const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
    const{ username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    // salt is a variable which is combined with our password and makes it encrypted
    const newUser = new User({ username, email, password: hashedPassword });
    try{
        await newUser.save()
        res.status(201).json("User Created successfully!");
    } catch (error){
        res.status(500).json(error.message);
    }
        await newUser.save()
        res.status(201).json("User Created successfully!");
};

module.exports = signup
