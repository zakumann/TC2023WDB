function whosPaying(names) {
      var numberOfPeople = names.length;
      var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
      var randomOfPerson = names[randomPersonPosition];
      
      return randomOfPerson + " is going to buy lunch today!";
  }