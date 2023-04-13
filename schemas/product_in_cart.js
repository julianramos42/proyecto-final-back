import Joi from "joi-oid";

const schema = Joi.object({
    title: Joi
        .string()
        .required()
        .min(3)
        .max(20)
        .messages({
            "string.min": "The title must have at least 3 characteres",
            "string.max": "The title must have a maximum of 20 characteres",
            'string.empty': 'The title cannot be empty',
            'any.required': 'A title is required'
        }),
    unit_price: Joi
        .number()
        .required()
        .min(1)
        .messages({
            "number.min": "The unit_price must be at least 1",
            'number.empty': 'The unit_price cannot be empty',
            'any.required': 'A unit_price is required'
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
    quantity: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'The quantity must be at least 1 characters',
            'number.empty': 'The quantity cannot be empty',
            'any.required': 'A quantity is required',
        }),
    maxStock: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'The maxStock must be at least 1 characters',
            'number.empty': 'The maxStock cannot be empty',
            'any.required': 'A maxStock is required',
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