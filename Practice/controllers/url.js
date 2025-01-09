const URL = require("../models/url");
const shortid = require("shortid");

async function handleAllURLs(req, res) {
    if(!req.user) {return res.redirect("/login")}
    const urls = await URL.find({createdBy: req.user._id});
    return res.render("static", {urls: urls, count:0 });
}

async function handleURLById(req, res) {
    const id = req.params.id;
    const entry = await URL.findOne({shortId: id});
    return res.redirect(entry.redirectURL);
}

async function handleNewCreatedURL(req, res) {
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: "url is required"});
    }
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        createdBy: req.user._id
    });

    return res.render("home", {Id: shortID});
}

module.exports = {
    handleNewCreatedURL,
    handleURLById,
    handleAllURLs,
}