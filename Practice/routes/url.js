const express = require("express");
const router = express.Router();

const { 
    handleNewCreatedURL,
    handleAllURLs, 
    handleURLById 
    } = require("../controllers/url");

router
    .post("/", handleNewCreatedURL)
    .get("/urls", handleAllURLs)
    .get("/analytics/:id", handleURLById);

module.exports = router;