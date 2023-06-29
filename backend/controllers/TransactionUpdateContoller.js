express = require('express');
mongoose = require('mongoose');
TransactionModel = require('../models/TransactionModel');


function updateProduct(req,res){
    const {transacton, description,price} = req.body
    TransactionModel.updateOne({_id : transacton},{$set :{

        description:description,
        amount:price    
        
    }}).then((response)=>{
        res.send(response)
    })
}

module.exports = updateProduct