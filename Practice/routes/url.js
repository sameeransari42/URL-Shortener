const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleReachToSite,
  handleGenerateAllUrl
} = require("../controllers/url");


router.post("/", handleGenerateNewShortURL);
router
  .get("/urls", handleGenerateAllUrl)
  .get("/:id", handleReachToSite);

module.exports = router;
 