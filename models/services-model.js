const mongoose = require('mongoose');

const serviceSchema = new  mongoose.Schema({
    service:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    charges:{
        type:String,
        require:true
    },
    provider:{
        type:String,
        require:true
    }
})

const service = new mongoose.model("service",serviceSchema);

module.exports = service;