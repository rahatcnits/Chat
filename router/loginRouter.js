const express = require("express");
const router = express.Router();

// internal imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../midlewares/commons/decorateHtmlResponse");

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
