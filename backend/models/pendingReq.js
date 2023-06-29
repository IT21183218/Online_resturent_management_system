const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    amount:{
        type: String,
        required: true
    },
    userPhoto:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', postSchema);

