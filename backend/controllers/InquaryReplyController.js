express = require('express')
mongoose = require('mongoose');
InquaryModel =require('../models/InquaryModel');

function postInquary(req,res){
    const { name, description, userPhoto, position} = req.body
    let newProduct = new InquaryModel();
    newProduct.id= id
    newProduct.name = name
    newProduct.description = description
    newProduct.userPhoto = userPhoto
    newProduct.qty = position

    newProduct.save().then((response)=>{
        res.send(response)
    })
}
module.exports = postInquary