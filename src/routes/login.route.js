const bcryptjs = require('bcryptjs');
const _ = require('lodash');
const router = require('express').Router();
const UserSchema = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/login', async function (req, res, next) {
    try {
        const user = _.get(req, 'body', {});
        const foundUser = await UserSchema.findOne({ username: user.username });
        if (!foundUser) throw Error("Invalid user name!")
        const comparePassword = await bcryptjs.compare(user.password, foundUser.password);
        if (!comparePassword) throw new Error('User password invalid');
        const token = jwt.sign({ _id: foundUser._id }, process.env.AUTH_SECRET);
        res.header({ Authorization: token }).send(token);
    } catch (error) {
        next(error);
    }

});

module.exports = router;
