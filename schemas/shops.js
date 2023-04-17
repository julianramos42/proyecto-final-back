import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required',
            }
        ),
    category: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The category must be at least 3 characters',
                'string.empty': 'The category cannot be empty',
                'any.required': 'A category is required',
            }
        ),
    city: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The city must be at least 3 characters',
                'string.empty': 'The city cannot be empty',
                'any.required': 'A city is required',
            }
        ),
    country: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The country must be at least 3 characters',
                'string.empty': 'The country cannot be empty',
                'any.required': 'A country is required',
            }
        ),
    description: Joi
        .string()
        .required()
        .min(8)
        .max(50)
        .messages(
            {
                'string.min': 'The description must be at least 8 characters',
                'string.max': 'The description cannot exceed 50 characters',
                'string.empty': 'The description cannot be empty',
                'any.required': 'A description is required',
            }
        ),
    token: Joi
        .string()
        .required()
        .min(10)
        .max(200)
        .messages(
            {
                'string.min': 'The token must be at least 10 characters',
                'string.max': 'The token cannot exceed 200 characters',
                'string.empty': 'The token cannot be empty',
                'any.required': 'A token is required',
            }
        ),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'The photo must be at least 8 characters',
                'string.empty': 'The photo cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary'
            }
        ),
    phone : Joi
        .string()
        .pattern(/^\d{10}$/)
        .required()
        .messages(
            {
                'string.empty': 'The phone cannot be empty',
                'any.required': 'A phone is required',
            }
        ),
    banner: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'The banner must be at least 8 characters',
                'string.empty': 'The banner cannot be empty',
                'any.required': 'A banner is required',
                'string.uri': 'A valid URL is necessary'
            }
        )
})

export default schema