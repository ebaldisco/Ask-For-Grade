function processGrade(grade){
  if(grade < 70 ){
      console.log("There is no grade like that");
      
  }
  else if (grade >=70 && grade < 75){
    if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade -3));
    }
    else {
      console.log("Your new grade is :" + (grade -2));   
    }
  }
  else if(grade>=75 && grade <=100){

 if(grade % 2){  //odd
    console.log("Your new grade is :" + (grade + 5));
    }
    else {
      console.log("Your new grade is :" + (grade + 3));   
    }

  }
  
  else{
      console.log("Grade is Overkill");
  }
}

function processGradeString(answer){
    if(answer == "INC" || answer == "inc"){
            
            console.log("Your grade is Incomplete");
        }
        else if(answer == "DROP" || answer == "drop"){
            console.log("You have DROP the subject");
        }
        else{
            console.log("ERROR Input");
                     
        }
}

module.exports = {
    processTheGrade:processGrade,
    processTheGradeString:processGradeString
}