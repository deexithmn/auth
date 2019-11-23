const Joi = require('@hapi/joi');

module.exports = async function (obj) {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        repeat_password: Joi.ref('password'),
        birth_year: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email()
    }).with('username', 'birth_year');
    return schema.validate(obj);
}
