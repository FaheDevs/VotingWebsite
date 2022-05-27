const { response } = require('express')
const express = require('express');
const router =express.Router()

const registrationTemplate =require('../models/registrationModels');


router.post('/signup',(request,response)=>{
    const registredUser = new registrationTemplate({
        organisation:request.body.organisation,
        pays:request.body.pays,
        adresse:request.body.adresse,
        ville :request.body.ville,
        codepostale:request.body.codepostale,
        nom:request.body.nom,
        numeroTel:request.body.numeroTel,
        email:request.body.email,
        passeword:request.body.passeword



         
    })

    registredUser.save().then(data=>{
        response.json(data)
    }).catch(error => {
        response.json(error)
    })
})

module.exports= router