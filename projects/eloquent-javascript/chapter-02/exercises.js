
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
  let combined = ''
  let oddPos = ' ';
  let evenPos = '#';
  for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= rows; j++) {
      if((i + j) % 2 === 0) {
        console.log(combined += oddPos + evenPos);
      } else if(j === rows) {
        console.log(combined + "\n");
      }
    }
  }
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
