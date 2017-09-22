// Eloquent Javascript Chapter 4 Exercises

// The Sum Of A Range
function range(start, end, step) {
  if(step == null) {
    step = 1;
  }
  var numbers = [];
	if(step > 0) {
       	for(var i = start; i <=end; i += step) {
			numbers.push(i);
  		}
    } else {
      	for(var i = start; i >= end; i += step) {
			numbers.push(i);
    	}
    }
  return numbers
}

function sum(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
	return total
}


console.log(range(1, 10, 2));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


// Reversing An Array
function reverseArray(array) {
  var reverseArray = [];
  for(var i = 1; i <= array.length; i++) {
    reverseArray.push(array[array.length - i])
  }
  return reverseArray;
}

function reverseArrayInPlace(array) {
  var halfArray = Math.floor(array.length / 2);
  for(var i = 0; i < halfArray; i++) {
    var removedBegin = array[i];
     array[i] = array[array.length - i - 1];
     array[array.length - i - 1] = removedBegin
  }
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);