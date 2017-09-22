
var grid = "";
// variable that stores the width of the grid
var width = 8;
// variable that stores the height of the grid which is equal to the width
var height = width;

// an outer loop that creates the height 
for(var h = 1; h <= height; h++) {
    // if the current row is odd, add a space at the beginning of the row
    if(h % 2 === 1) {
      grid+= " ";
  }
  // an inner loop that creates the width of the grid    
  for(var i = 1; i <= width; i++) {
    // if the current space in the row is odd create a # symbol
    if(i % 2 === 1) {
      grid+= "#";
    // otherwise create a blank space
    } else {
      grid+= " ";
    }
  }
  // create a new line after each row
  grid += "\n"
}

// print out the grid
console.log(grid);
