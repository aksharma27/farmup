const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String, 
        required: true,
    },
    bid_price: {
        type: Number,
    },
});

const User = new mongoose.model("User", userSchema);

module.exports = User;