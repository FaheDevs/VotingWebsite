const { request, response } = require('express');
const express = require('express');
const router = express.Router()
const signUpTemplatesCopy = require('../models/testModel');



router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTemplatesCopy({
        fullName:request.body.fullName,
        username:request.body.username,



    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })

})




module.exports=router