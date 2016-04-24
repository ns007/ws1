var express = require('express');    
var app = express(); 
var url = require('url'); 
var students = require('./students_ws');  

app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Student app"}); 
}); 

//example - http://localhost:3000/getAllExcellenceStudent 
app.get('/getAllExcellenceStudent', function (req, res) { 
  var ExcellenceStudent = students.getAllExcellenceStudent(); 
  res.set('getAllExcellenceStudent', 'ok'); 
  res.json({"Excellence Student are " :ExcellenceStudent}); 
}); 
 
//example - http://localhost:3000/getStudGrade?id=3 
app.get('/getStudGrade', function (req, res) { 
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query; 
    var studentById = students.getStudGrade(query.id); 
    res.set('getStudGrade', 'ok'); 
    res.json({Student:studentById, id:query.id}); 
}); 
 
//example - http://localhost:3000/getExcellenceByYear/2015 
app.get('/getExcellenceByYear/:year', function (req, res) {     
    var ExcellenceStudentsByYear = students.getExcellenceByYear(req.params.year); 
    res.set('getExcellenceByYear', 'ok'); 
    res.json(ExcellenceStudentsByYear); 
}); 

//example - http://localhost:3000/error 
app.get('/error', function (req, res) { 
    res.status(500).json({status:false, message:"Internal Server Error"}); 
}); 
 
app.listen(process.env.PORT || 3000); 
console.log('Node app is running on port', process.env.PORT); 
