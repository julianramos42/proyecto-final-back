import Joi from "joi-oid"

const schema = Joi.object({
    category_name: Joi
    .string()
    .required()
    .messages({
        "string.min": "The category must have at least 3 characteres",
        "string.max": "The category must have a maximum of 20 characteres",
        'string.empty': 'The category cannot be empty',
        'any.required': 'A category is required'
    }),
})

export default schema;