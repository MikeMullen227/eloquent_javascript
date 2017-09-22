// Eloquent Javascript Chapter 3 Exercises

// Minimum
function min(x, y) {
  if(x < y) {
    return x
  } else { 
    return y
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



// Recursion
function isEven(number) {
  if(number < 0) {
    number = -(number);
  }
  if(number === 0) {
    return true;
  } else if(number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
 
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false




// Bean Counting
function countBs(string) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === "B") {
      count++;
    }
  }
  return count;
}

function countChar(string, letter) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string.charAt(i) === letter) {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


