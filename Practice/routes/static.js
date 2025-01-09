const express = require("express");
const router = express.Router();
const {handleAllURLs} = require("../controllers/url");
router
    .get("/", async (req, res) => { return res.render("home") })
    .get("/signup", (req, res) => { return res.render("signup")})
    .get("/login", (req, res) => { return res.render("login")})
    

module.exports = router;