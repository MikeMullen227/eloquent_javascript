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



// A List

function arrayToList(array) {
  var list = null;
  for(var i = array.length - 1; i >= 0 ; i--) {
     list = {value: array[i], rest: list};
  }
  return list;
}
	

function listToArray(list) {
  var array = [];
  for(var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}


function prepend(element, list) {
  return {value: element, rest: list}	
}


console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20



// Deep Comparison
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

