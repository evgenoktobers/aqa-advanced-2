function isAdult(age) {
    return age >= 18;
  }
  
  const age1 = 25;
  const age2 = 15;
  
  console.log("Особа доросла: ", isAdult(age1));
  console.log("Особа неповнолітня: ", isAdult(age2));