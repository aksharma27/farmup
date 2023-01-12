const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    email: {
        type: String,
        requied: true 
    },
    password: {
        type: String,
        required: true 
    },
    crop: {
        type: String,
        required: true   
    },
    price: {
        type: String,
        required: true
    }

});


const Admin = new mongoose.Model("Admin", adminSchema);

module.exports = Admin;
   