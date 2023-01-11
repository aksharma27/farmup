const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true
    },
    crop: {
        type: String,
        required: true   
    },

});


const Admin = new mongoose.Model("Admin", adminSchema);

module.exports = Admin;
   