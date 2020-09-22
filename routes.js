const express = require('express')
const routes = express.Router()

routes.get('/',function(req,res){
    return res.render('classes/index')
})

routes.get('/classes', function(req,res){
    return res.render('classes/index.njk')
})

routes.get('/players', function(req, res){
    return res.send('players')
})
module.exports = routes