express = require('express');
mongoose = require('mongoose');
TransactionModel = require('../models/TransactionModel');

function getAllTransaction(req, res){
    
    TransactionModel.find().then((response) => {
        res.json(response);
    }).catch((err) => {
        console.log(err);
    })

}

module.exports = getAllTransaction