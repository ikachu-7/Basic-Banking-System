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
    currentBalance: {
        type: Number,
        required: true,
    },
    bankName: {
        type: String,
        required: true,
    }
},{ timestamps: true} );

const userModel = mongoose.model('customers',userSchema);

module.exports = userModel;