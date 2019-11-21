const router = require('express').Router();
const UserSchema = require('../models/user')
const mongoose = require('mongoose');

router.post('/register', async function (req, res, next) {
    try {
        let myObj = req.body;
        // const result = await UserSchema.validate(myObj);
        const user = new UserSchema(req.body);
        const err = await user.joiValidate(user);
        // var user = mongoose.model('User', UserSchema);
        user.save(user);
    } catch (error) {
        next(error);
    }
})

module.exports = router;
