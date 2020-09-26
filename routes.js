const express = require('express') 
const routes = express.Router()    
const classe = require('./classe') 


routes.get('/',function(req,res){
    return res.render('classes/index')
})

routes.get('/classes', function(req,res){
    return res.render('classes/index.njk')
})

routes.get('/classes/create', function(req, res) {
    return res.render('classes/create')
})

routes.post('/classes', classe.post)

routes.get('/players', function(req, res){
    return res.send('players')
})
module.exports = routes