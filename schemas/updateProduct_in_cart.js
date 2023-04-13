import Joi from "joi-oid";

const schema = Joi.object({
    quantity: Joi
        .number()
        .required()
        .min(1)
        .messages({
            'number.min': 'The quantity must be at least 1 characters',
            'number.empty': 'The quantity cannot be empty',
            'any.required': 'A quantity is required',
        }),
})

export default schema;