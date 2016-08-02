const readline = require('readline');
const utils = require('./newgrade');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a grade: ',function (answer)  {
  var grade = parseInt(answer);
  
  
  if (isNaN(answer)){
   
      utils.processTheGradeString(answer);
       
    }else{
        utils.processTheGrade(grade);
        
    }
 
  rl.close();
});