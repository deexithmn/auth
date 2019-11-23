const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    repeat_password: String,
    access_token: String,
    birth_year: String,
    email: String,
});

module.exports = mongoose.model('User', userSchema);
