const Joi = require("joi");
require("dotenv").config();

const config = Joi.object({
  PORT: Joi.number().port().required().messages({
    "any.required": "PORT is not found in env add it and refresh again",
    "number.base": "PORT must be integar",
    "number.empty": "PORT cannot be empty",
    "number.port": "PORT must be valid between 1 to 65335",
  }),
  BASE_URL: Joi.string()
    .uri({ scheme: ["https", "http"] })
    .required()
    .messages({
      "any.required": "Base Url is not found in env add it and refresh again",
      "string.base": "Base Url must be string",
      "string.empty": "Base Url cannot be empty",
      "string.uri": "Base Url must be valid url",
    }),
  DB_URL: Joi.string()
    .uri({ scheme: ["mongodb", "mongodb+srv"] })
    .required()
    .messages({
      "any.required":
        "Database Url is not found in env add it and refresh again",
      "string.base": "Database Url must be String",
      "string.empty": "Database Url cannot be empty",
      "string.port": "Database Url must be valid url",
    }),
}).unknown(true);

const { error, value } = config.validate(process.env, {
  abortEarly: false,
  stripUnknown: true,
});

if (error) {
  return console.log(error.details.map((e) => e.message).join(", "));
}
module.exports = {
  config: {
    port: value.PORT,
    base_url: value.BASE_URL,
    db_url: value.DB_URL,
  },
};
