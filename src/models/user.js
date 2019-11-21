const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    repeat_password: String,
    access_token: String,
    birth_year: String,
    email: String,
});

userSchema.methods.joiValidate = async function (obj) {
    // const Joi = require("joi");
    var schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(/^[a-zA-Z0-9]{3,30}$/),
        repeat_password: Joi.ref('password'),
        access_token: [Joi.string(), Joi.number()],
        birth_year: Joi.number().integer().min(1900).max(2013),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    }).with('username', 'birth_year');
    // return Joi.validate(obj, schema);
    return schema.validate(obj);
}

module.exports = mongoose.model('User', userSchema);



// const userSchema = new mongoose.Schema(user);

// module.exports = user;
