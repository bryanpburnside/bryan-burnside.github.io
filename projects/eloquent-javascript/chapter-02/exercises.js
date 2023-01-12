
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) {
  let string = ''; // string to hold hashs at each iteration
  for(let i = 1; i <= rows; i++) { // loop "row" number of times
      console.log(string += '#'); // print hash += hash to the console at each iteration 
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) { // function takes a start param and an end param
  for(let i = start; i <= end; i++) { // loops from start to end
    if(i % 3 === 0 && i % 5 === 0) { // if the number is divisible by 3 and 5
      console.log("fizzbuzz"); // logs fizzbuzz to the console
    } else if(i % 3 === 0) { // if number is divisible by 3
      console.log("fizz"); // logs fizz to the console
    } else if(i % 5 === 0) { // if the number is divisible by 5
      console.log("buzz"); // logs buzz to the console
    } else { // otherwise
      console.log(i); // logs the number to the console
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(rows) {
  let combined = '' // the combined odd/even characters to form the chessboard
  let evenPos = ' '; // starting character if the row/char pos is even (i.e. pos [1, 1])
  let oddPos = '#'; // starting character if the row/char pos is odd (i.e. pos [1, 2])
  for(let i = 1; i <= rows; i++) { // loop to handle rows
    for(let j = 1; j <= rows; j++) { // loop to handle characters
      if((i + j) % 2 === 0) { // if the position is an even position
        combined += evenPos; // add a space to our chessboard
      } else if((i + j) % 2 !== 0) { // if the position is an odd position
        combined += oddPos; // add a hash to our chessboard
      }
      if(j === rows) { // if our character loop is at the end of the line
        combined += '\n'; // add a line break
      }
    }
  }
  console.log(combined); // print our chessboard to the console
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
