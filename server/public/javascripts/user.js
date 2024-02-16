const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ServiceDB");

const userSchema = mongoose.Schema({
    userName: String,
    city: String,
    phone: Number,
    Addreess: String,
    email: String,
    password: String,
});

module.exports = mongoose.model('User',userSchema);