import Joi from "joi-oid";

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "The name must have at least 3 characteres",
            "string.max": "The name must have a maximum of 20 characteres",
            'string.empty': 'The name cannot be empty',
            'any.required': 'A name is required'
        }),
    price: Joi
        .number()
        .required()
        .min(1)
        .messages({
            "number.min": "The price must be at least 1",
            'number.empty': 'The price cannot be empty',
            'any.required': 'A price is required'
        }),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages({
            'string.min': 'The photo must be at least 8 characters',
            'string.empty': 'The photo cannot be empty',
            'any.required': 'A photo is required',
            'string.uri': 'A valid URL is necessary'
        }),
    stock: Joi
        .number()
        .required()
        .min(0)
        .messages({
            'number.min': 'The stock must be at least 0 characters',
            'number.empty': 'The stock cannot be empty',
            'any.required': 'A stock is required',
        }),
    category: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "The category must have at least 3 characteres",
            "string.max": "The category must have a maximum of 20 characteres",
            'string.empty': 'The category cannot be empty',
            'any.required': 'A category is required'
        }),
    description: Joi
        .string()
        .required()
        .min(20)
        .max(200)
        .messages({
            "string.min": "The description must have at least 20 characteres",
            "string.max": "The description must have a maximum of 200 characteres",
            'string.empty': 'The description cannot be empty',
            'any.required': 'A description is required'
        }),
  });
  
  export default schema;