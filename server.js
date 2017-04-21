var express = require('express');
var app = express();
var mongojs = require('mongojs');

var db = mongojs('address',['contacts'])
var bodyParser = require('body-parser');

app.use (express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.get('/api/contact/list',function(req,res){
   console.log('received a get request');
   
   db.contacts.find(function(err,docs){
       console.log(docs);
       res.json(docs);
   }); 
   
});

app.post('/api/contact/new',function(req,res){
   console.log(req.body);
   db.contacts.insert(req.body,function(err,doc){
       res.json(doc);
   })
});

app.delete('/api/contact/:id',function(req,res) {
    var id = req.params.id;
    console.log(id);
    db.contacts.remove({_id:mongojs.ObjectId(id)},function(err,doc){
        res.json(doc);     
    });
});

app.get('/api/contact/:id',function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contacts.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
        res.json(doc);
    });
});

app.put('/api/contact/:id',function(req,res){
    var id = req.params.id;
    console.log(req.body.name);
    db.contacts.findAndModify({
        query : {_id:mongojs.ObjectId(id)},
        update : {$set:{name:req.body.name,email:req.body.email,phone:req.body.phone}},
        new:true},function(err,doc) {
            res.json(doc);      
        }
    );
})

app.listen(3000);
console.log("Server running on port : 3000");