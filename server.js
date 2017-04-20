var express = require('express');
var app = express();


app.use (express.static(__dirname+"/public"));

app.get('/api/contact/list',function(req,res){
   console.log('received a get request');
   
    person1 = {
        name : 'Arun',
        email : 'arun@yes.com',
        phone : '9882208232'
    };
    
    person2 = {
        name : 'Yazhini',
        email : 'yazhini@yes.com',
        phone : '7822208232'
    }; 
    
    person3 = {
        name : 'Varun',
        email : 'varun@yes.com',
        phone : '8822208232'
    }; 
    
    var contactList = [person1,person2,person3];
    res.json(contactList);
});

app.listen(3000);
console.log("Server running on port : 3000");