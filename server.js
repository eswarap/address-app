var express = require('express');
var app = express();
var mongojs = require('mongojs');

var db = mongojs('address',['contacts'])

app.use (express.static(__dirname+"/public"));

app.get('/api/contact/list',function(req,res){
   console.log('received a get request');
   
   db.contacts.find(function(err,docs){
       console.log(docs);
       res.json(docs);
   }); 
});

app.post('/api/contact/list',function(req,res){
    console.log(req.body);
})

app.listen(3000);
console.log("Server running on port : 3000");