const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    try {
        const token = req.header('Authorization');
        if (!token) throw new Error('Access denied');
        const userId = jwt.verify(token, process.env.AUTH_SECRET);
        req.userId = userId;
        next();
    } catch (err) {
        next(err.message);
    }
}
