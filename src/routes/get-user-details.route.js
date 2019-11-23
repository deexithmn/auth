const router = require('express').Router();
const verifyToken = require('../service/verify-user.service');
const user = require('../models/user');

router.get('/details', verifyToken, async function (req, res, next) {
    try {
        const userDetails = await user.findOne({ _id: req.userId });
        console.log(userDetails);
        res.send(userDetails);
    } catch (err) {
        next(err);
    }
})
module.exports = router;
