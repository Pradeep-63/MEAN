const { body } = require('express-validator');
const validateUser = [
    body("firstName")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("firstName is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("firstname must be 3 characters and maximum 30 character"),
      
    body("lastName")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("lastName is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("lastname must be 3 characters and maximum 30 character"),

    body("email")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("Please enter a valid email"),

    body("password")
      .trim()
      .escape()
      .isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
      .withMessage("password must be strong"),

      body("contactNo")
      .trim()
      .escape()
      .notEmpty()
      .withMessage("contact Number can't be empty")
      .isMobilePhone()
      .withMessage("Please add a valid contact number"),
    ]
 module.exports=validateUser   