const express = require("express");
const router = express.Router();

// internal imports
const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../midlewares/commons/decorateHtmlResponse");
const avatarUpload = require("../midlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../midlewares/users/userValidations");

// users page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  addUserValidators,
  addUserValidationHandler,
  avatarUpload,
  addUser
);

module.exports = router;
