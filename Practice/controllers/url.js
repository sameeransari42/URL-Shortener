const shortid = require("shortid");
const URL = require("../models/url");
const User = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id
  });

  return res.render("home", {
    id: shortID,
  });
}

async function handleGenerateAllUrl(req, res) {
  const urls = await User.find({createdBy: req.user._id});
  return res.render("allurls", {urls, name: req.user.name});
}

async function handleReachToSite(req, res) {
  const shortid = req.params.id;
  const url = await URL.findOne({shortId: shortid});
  console.log(url);
  return res.redirect(url.redirectURL);
}

module.exports = {
  handleGenerateNewShortURL,
  handleGenerateAllUrl,
  handleReachToSite
};
