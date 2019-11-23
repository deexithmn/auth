const router = require('express').Router();
const UserSchema = require('../models/user')
const userValidation = require('../schemas/new-user-validate.schema');
const bcryptjs = require('bcryptjs');
const _ = require('lodash');

router.post('/register', async function (req, res, next) {
    try {
        let myObj = req.body;
        const err = await userValidation(myObj);
        if (err.error) throw new Error(err.error.message);
        const user = new UserSchema(req.body);
        const duplicateUser = await UserSchema.findOne({ email: user.email });
        if (duplicateUser) throw Error('User email already exist');

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(user.password, salt);
        _.set(user, 'password', hashedPassword);
        user.save(user).then(data => {
            console.log('User Created');
            res.send(`${data.username} welcome.`);
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;
