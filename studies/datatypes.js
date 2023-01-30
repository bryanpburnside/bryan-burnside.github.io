/**
 * DATATYPES:
 * 
 * 0. Datatypes concern all of the various types of data in Javascript. These structures
 * can be simple/primitive (i.e. numbers, strings, booleans, NaN, undefined, and null) or 
 * complex (i.e. arrays, objects, and functions).
 * 
 * 1. Number: numeric data
 *
 * 2. String: character data
 *
 * 3. Boolean: true/false values
 *
 * 4. Array: indexed list-like objects | []
 *
 * 5. Object: store various keyed collections | {}
 *
 * 6. Function: set of statements that performs a task or calculates a value
 *
 * 7. undefined: no-value, uninitalized
 *
 * 8. null: no value, intentionally nullified by programmer
 *
 * 9. NaN: stands for 'Not a Number'
 *
 * 10. Infinity and -Infinity: is a numeric value representing infinity (greater than any other 
 * number) or infinity (less than any other number)
 *
 * 11. The difference between primitive/simple and complex data types, is that simple/primitive
 * datatypes are atomic and immutable, meaning they do not hold, collect or aggregate other
 * values, and operations on simple values return new simple values, they do not alter the 
 * original value. Complex datatypes aggregate other values and are of indefinite size.
 *
 * 12. Primitive values are passed to a function BY COPY, complex values are 
 * BY REFERENCE. This means that when primitive values are assigned or passed, their simple
 * datatypes are copied from one variable to the next (they do not affect the variable
 * they refer to). Complex datatypes are copied by reference, meaning that when assigning or
 * passing complex datatypes are passed by reference (they will still point to the variable
 * they are copied from).
 */

// 1. Numbers //

// With decimals:
let decimaled = 23.00;

// Without decimals:
let unDecimaled = 23;

// 2. Strings //
// Using double quotes:
let double = "I have double quotes";

// Using single quotes:
let single = 'I have single quotes, but they effectively do the same thing';

// 3. Boolean //

let fofi = 'cat';
let trout = 'cat';
let fofiAndTroutInATrenchcoat = 'a small child';

if(fofi === trout) {
  console.log(true) // prints => true to the console
}

if(fofi !== fofiAndTroutInATrenchcoat && trout !== fofiAndTroutInATrenchcoat) {
  console.log(false) // prints => false to the console
}

// 4. Array //

const cats = ["Tabby", "Calico", "Persian Blue"]; // here's an array of strings, but arrays can hold any datatypes

// 5. Object //

const person = {firstName:"Bryan", lastName:"Burnside", age:33, eyeColor:"brown"}; // here's a person object of keys and values represented by strings, but objects values can be any datatype

// 6. Function //

function add(a, b) {
  return a + b; // Function returns the sum of a and b
}

let added = add(10, 2); // Function is called, return value (in this case, 12) will be what the variable is initialized to

// 7. undefined //

let imNotDefined; // Value is undefined, type is undefined

// 8. null //

let thisIsNull = null; // Value is set by programmer to null

// 9. Nan //

let characterTimesNumber = 'a' * 2;
console.log(characterTimesNumber) // prints => NaN to the console

// 10. Infinity and -Infinity //

let theHighest = Infinity // is a number bigger than the biggest allowed number
let theLowest = -Infinity // is a number smaller than the smallest allowed number
console.log(theHighest) // prints => Infinity to the console
console.log(theLowest) // prints => -Infinity to the console

// 11. Primitive vs Complex //

let primitive = `5, 'a character', true/false, null, undefined, NaN, Infinity`; // a string, a number, a boolean, null, undefined, NaN, the infinite

let complex = [{a: 'e',}, {i: 'o'}, ['u'], {andSometimes: function(y) {}}]; // an array, an object, or a function, or all three

// 12. Copy by Value vs Copy by Reference //

let a = 5;
let b = a;
b = 10;
console.log(a); // despite b being set to a, and then being set to 10, as a's value was copied by value, the change to b's value does not affect a

let array = [1, 2, 3];
let referenced = array.push(4);
console.log(array); // due to the effect of referencing array and using the push method on it, array is now [1, 2, 3, 4] 
console.log(referenced); // referenced now equals what the push method resolves to, which is the length of the array, 4

let object = {a: 1, b: 2, c: 3};
let sameHat = object;
sameHat.d = 4;
console.log(object); // due to the effect of sameHat being set to the reference value of the object and adding a key of d and seeting the value to 4, object is now {a: 1, b: 2, c: 3, d: 4} 
