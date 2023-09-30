const User = require("../models/user.model.js");
const bcryptjs = require("bcryptjs");
const errorHandler = require("../utils/error.js");

const signup = async (req, res, next) => {
    const{ username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);
    // salt is a variable which is combined with our password and makes it encrypted
    const newUser = new User({ username, email, password: hashedPassword });
    try{
        await newUser.save()
        res.status(201).json("User Created successfully!");
    } catch (error){
        next(error);
    }
};

module.exports = signup
