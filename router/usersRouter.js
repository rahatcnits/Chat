const express = require("express");
const router = express.Router();

// internal imports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../midlewares/commons/decorateHtmlResponse");
const avatarUpload = require("../midlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../midlewares/users/userValidations");

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post("/", addUserValidators, addUserValidationHandler, avatarUpload);

module.exports = router;
