const Joi = require("joi");
const userRegisterValidate = (req, res, next) => {
  const Schema = Joi.object({
    fullName: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  const { error, value } = Schema.validate(req.body);
  // if (error) {
  //   return res.status(400).send(error, "Internal errors");
  // }

  if (error) {
    // Extract error details from Joi's error object
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join("; ");
    return res.status(400).send(errorMessage);
  }
  next();
};

const userLoginValidate = (req, res, next) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });

  const { error, value } = Schema.validate(req.body);
  // if (error) {
  //   return res.status(400).send(error, "Internal errors");
  // }

  if (error) {
    // Extract error details from Joi's error object
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join("; ");
    return res.status(400).send(errorMessage);
  }
  next();
};

module.exports = { userRegisterValidate, userLoginValidate };
