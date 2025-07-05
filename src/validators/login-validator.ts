import Joi from "joi";

export const loginValidator = Joi.object({
    login: Joi.string().pattern(/w+/).required().messages({
        'string.pattern.base': 'Username must be a string',
        'string.empty': 'Username is required',
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.empty': 'Password is required',
    })
})