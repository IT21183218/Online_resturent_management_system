express = require('express');
mongoose = require('mongoose');
TransactionModel = require('../models/TransactionModel');

function deleteProduct(req,res){
    TransactionModel.deleteOne({_id : req.body.productId}).then((response)=>{
        res.send(response)
    })
}

module.exports = deleteProduct