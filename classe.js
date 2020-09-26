// create
const fs = require('fs')
const data = require('./data.json')
exports.post = function(req, res){ 
    const keys = Object.keys(req.body)
    for(key of keys){
        if(req.body[key] == "")
        return res.send("fill all fiewds plis")
    }

    //req.body.release = Date.parse(req.body.release)
    data.classes.push(req.body)
    fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("erro")
    
        return res.redirect("/classes/create")
    })
    //return res.send(req.body)
}

//update


//delete