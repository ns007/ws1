var studentsArray = [ 
{ 
   "id": 1, 
   "name": 'Golan Sabo', 
   "grade": '100', 
   "year": 2010
},
{ 
  "id": 2, 
  "name": 'Yaniv Sapir', 
  "grade": '100', 
  "year": 2010
},
{ 
  "id": 3, 
  "name": 'Arel Gindozzzz', 
  "grade": '95', 
  "year": 2015
  
},
{ 
  "id": 4, 
  "name": 'Lior Lerner', 
  "grade": '87', 
  "year": 2000
}, 
{ 
  "id": 5, 
  "name": 'Karin Lerner', 
  "grade": '80', 
  "year": 2000
}, 
{ 
  "id": 6, 
  "name": 'Netanel Shilo', 
  "grade": '60', 
  "year": 2000
}, 
{ 
  "id": 7, 
  "name": 'Sagi Maday', 
  "grade": '58', 
  "year": 2000
}, 
{ 
  "id": 8, 
  "name": 'Eyal Golan', 
  "grade": '31', 
  "year": 1999
}]; 

//function return all the exellence students , exellence stundents - grade > 90;
exports.getAllExcellenceStudent = function() 
{
    var ExcellencestudentsArray = []; 
    var runningIndex = 0; 
    for (var i = 0; i < studentsArray.length; i++) 
    { 
        if (studentsArray[i].grade > 90) 
        { 
            ExcellencestudentsArray[runningIndex++] =  studentsArray[i];
        } 
    } 
    if(ExcellencestudentsArray.length > 0)
      return ExcellencestudentsArray; 
    else
      return "there is no Excellence students !";
};

//function return the student grade according to id parameter
exports.getStudGrade = function(id) 
{ 
  for (var i = 0; i < studentsArray.length; i++)
  { 
      if (studentsArray[i].id == id) 
      { 
          return studentsArray[i]; 
      } 
  } 
  return "there is no such student!!!"; 
}; 

exports.getExcellenceByYear = function(year)
{
    var ExcellencestudentsArray = []; 
    var runningIndex = 0; 
    for (var i = 0; i < studentsArray.length; i++) 
    { 
        if (studentsArray[i].grade > 90 && studentsArray[i].year == year) 
        { 
            ExcellencestudentsArray[runningIndex++] =  studentsArray[i];
        } 
    } 
    if(ExcellencestudentsArray.length > 0)
      return ExcellencestudentsArray; 
    else
      return "there is no Excellence student in this year!!!";
};