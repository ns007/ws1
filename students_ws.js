

//function return all the exellence students , exellence stundents - grade > 90;
exports.getAllExcellenceStudent = function(students) 
{
    var ExcellencestudentsArray = [];
    var runningIndex = 0; 
    for (var i = 0; i < students.length; i++) 
    { 
        if (students[i].grade > 90) 
        { 
            ExcellencestudentsArray[runningIndex++] =  students[i];
        } 
    }
    if(ExcellencestudentsArray.length > 0)
      return ExcellencestudentsArray; 
    else
      return "there is no Excellence students !";
};

//function return the student grade according to id parameter
exports.getStudGrade = function(id,array) 
{ 
  //console.log(array);
  for (var i = 0; i < array.length; i++)
  { 
      if (array[i].id == id) 
      { 
          return array[i]; 
      } 
  } 
  return "there is no such student!!!"; 
}; 

exports.getExcellenceByYear = function(years,myarray)
{   
    var ExcellencestudentsArray = []; 
    var runningIndex = 0; 
    for (var i = 0; i < myarray.length; i++) 
    { 
        if (myarray[i].grade > 90 && myarray[i].year == years)
        { 
            ExcellencestudentsArray[runningIndex++] =  myarray[i];
        } 
    } 
    if(ExcellencestudentsArray.length > 0)
      return ExcellencestudentsArray; 
    else
      return "there is no Excellence student in this year!!!";
};