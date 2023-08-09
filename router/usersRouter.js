const express = require("express");
const router = express.Router();

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../midlewares/commons/decorateHtmlResponse");
const avatarUpload = require("../midlewares/users/avatarUpload");

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", avatarUpload);

module.exports = router;
