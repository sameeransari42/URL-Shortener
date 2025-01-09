const USERS = require("../models/users");
const {setUser} = require("../services/auth");
const {v4: uuidv4} = require("uuid");

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const User = await USERS.findOne({email, password});

    if(!User) { 
        return res.redirect("/login")
    }

    const sessionId = uuidv4();
    setUser(sessionId, User);
    res.cookie("uid", sessionId);
    return res.render("home");
}

async function handleUserSignUP(req, res) {
    const {name, email, password} = req.body;

    await USERS.create({
        name,
        email,
        password
    });

    return res.redirect("/login");
}

module.exports = {
    handleUserSignUP,
    handleUserLogin
}