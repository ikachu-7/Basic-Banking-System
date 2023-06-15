const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateOfTransaction: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true} );

module.exports = mongoose.model('transactions',transactionSchema);