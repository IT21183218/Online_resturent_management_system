const mongoose = require('mongoose');

const inquaryScheam = mongoose.Schema(
    {
        name:String,
        description:String,
        userPhoto:String,
        position:Number,
    }
)
module.exports = mongoose.model('Inquary', inquaryScheam);