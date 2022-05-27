const mongoose = require('mongoose');
const { FaThermometerQuarter } = require('react-icons/fa');


const registrationTemplate = new mongoose.Schema({

    organisation:{
        type:String,
        required:true
    },

    pays:{
        type:String,
        required:true 

    },
    adresse:{
        type:String,
        required:false
    },
    ville:{
        type:String,
        required:false
    },
    codepostale:{
        type:Number,

    },

    nom:{
        type:String,
        required:true
    },
    numeroTel:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passeword:{
        type:String,
        required:true 
    },
    date:{
        type:Date,
        default:Date.now

    }
})

module.exports= mongoose.model('registrationTable',registrationTemplate)
