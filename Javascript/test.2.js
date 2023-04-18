function lifeInWeeks(age){
  var currMonth = age*12;
    
  var currWeek = age*52;
  
  var currDays = age*365;
  
  var remMonth = (90*12)-currMonth;
  
  var remWeek = (90*52)-currWeek;
  
  var remDays = (90*365)-currDays;
  
  console.log("You have " + remDays + " days, " + remWeek + " weeks, and " + remMonth + " months left." );
}