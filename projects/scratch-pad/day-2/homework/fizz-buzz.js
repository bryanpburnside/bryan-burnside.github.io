// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    for(var i = 1; i <= 100; i++) { // loops from 1-100
        if (i % 3 === 0 && i % 5 === 0) { // if multiples of 3 and 5
            console.log("FizzBuzz"); // prints "FizzBuzz"
        } else if (i % 5 === 0) { // if multiple of 5
            console.log("Buzz"); // prints "Buzz"
        } else if (i % 3 === 0) { // if multiple of 3 
            console.log("Fizz"); // prints "Fizz"
        } else { // otherwise
            console.log(i); // prints the number
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}