import Joi from "joi-oid";

const schema = Joi.object({
    stock: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'The stock must be at least 1 characters',
            'number.empty': 'The stock cannot be empty',
            'any.required': 'A stock is required',
        }),
})

export default schema;