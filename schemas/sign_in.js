import Joi from "joi-oid";

const schema_signin = Joi.object({
  email: Joi.string()
    .required()
    .min(8)
    .email({ minDomainSegments: 2 })
    .messages({
    invalid: "Not an objets",
    }),
  password: Joi
    .string()
    .required()
    .min(8)
    .max(50)
    .messages({
    "string.min": "The name must have at least 8 characteres",
    "string.max": "The name must have a maximum of 50 characteres", 
  })
});

export default schema_signin;