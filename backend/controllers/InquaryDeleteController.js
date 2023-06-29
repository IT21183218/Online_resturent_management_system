express = require('express');
mongoose = require('mongoose');

const InquaryModel = require('../models/InquaryModel');

function deleteInq(req,res){
    InquaryModel.deleteOne({_id : req.body.InquaryID}).then((response)=>{
        res.send(response)
    })
}

module.exports = deleteInq