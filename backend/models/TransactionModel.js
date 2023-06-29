const mongoose = require('mongoose');

const transactonScheam = mongoose.Schema(
    {
        name:String,
        transactionID: String,
        amount:String,
        date: Date,
        description:String,
        profile:String

        
    }
)
module.exports = mongoose.model('Transaction', transactonScheam);