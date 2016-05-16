var express = require('express');    
var app = express(); 
var url = require('url'); 
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:db_pass@ds023052.mlab.com:23052/db_studgrades');
var Student = require('./Student');
var students = require('./students_ws');  
var studentsGrades;
//=================================================
mongoose.connection.once('open',function() {
  Student.find({},function(err,student) {
    if(err) throw err;
    
    studentsGrades = student;
    //console.log(studentsGrades);
    mongoose.disconnect();
  });
});

app.get('/', function (req, res) { 
    res.status(200).json({status:true, message:"Student app"}); 
}); 

//example - http://localhost:3000/getAllExcellenceStudent 
app.get('/getAllExcellenceStudent', function (req, res) { 
  var ExcellenceStudent = students.getAllExcellenceStudent(studentsGrades); 
  res.set('getAllExcellenceStudent', 'ok'); 
  res.json({"Excellence Student are " :ExcellenceStudent}); 
}); 
 
//example - http://localhost:3000/getStudGrade?id=3 
app.get('/getStudGrade', function (req, res) { 
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query; 
    //console.log(studentsGrades);
    var studentById = students.getStudGrade(query.id,studentsGrades); 
    res.set('getStudGrade', 'ok'); 
    res.json({Student:studentById, id:query.id}); 
}); 
 
//example - http://localhost:3000/getExcellenceByYear/2015 
app.get('/getExcellenceByYear/:years', function (req, res) {     
    var ExcellenceStudentsByYear = students.getExcellenceByYear(req.params.years,studentsGrades); 
    res.set('getExcellenceByYear', 'ok'); 
    res.json(ExcellenceStudentsByYear); 
}); 

//example - http://localhost:3000/error 
app.get('/error', function (req, res) { 
    res.status(500).json({status:false, message:"Internal Server Error"}); 
}); 
 

app.get('/', function(req,res){
  res.status(400).json({status:false , message:"Wrong path entered , Please check your url adrress"});
  });


app.all('*', function(req,res){
  res.status(400).json({status:false , message:"Wrong path entered , Please check your url adrress"});
});

app.listen(process.env.PORT || 3000); 
console.log('Node app is running on port', process.env.PORT); 
