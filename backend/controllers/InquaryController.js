express = require('express');
mongoose = require('mongoose');
InquaryModel = require('../models/InquaryModel');

function getAllInquaries(req, res){
    
    InquaryModel.find().then((response) => {
        res.json(response);
    }).catch((err) => {
        console.log(err);
    })

}
module.exports = getAllInquaries