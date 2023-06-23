const mongoose = require('mongoose');
 
const AutherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength:[3,"Name must be at least 3 characters"]
    },
    
},
    { timestamps: true }
);
 
const Auther = mongoose.model('Auther', AutherSchema);
 
module.exports = Auther;