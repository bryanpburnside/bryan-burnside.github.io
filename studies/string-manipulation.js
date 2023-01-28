/**
 * STRING-MANIPULATION:
 * 
 * 0. String manipulation concerns how we handle and analyze strings. It involves various operations, methods,
 * and properties used to modify, parse, and alter string data.  
 * 
 * 1. With Operators: There are only two operators used to modify a string, and they both allow you to join one string to another.
 * These operators are called "concatenate" (using +) and "concatenate assignment" (using +=).  
 * 
 * 2. With String Methods: There are many different string methods that exist in JavaScript to allow for the manipulation
 * of strings. Whether you want to slice a string, turn a string into an array, replace certain string characters, 
 * capitalize characters or lowercase them, JavaScript has a method to do so. 
 */

// 1. With Operators //
// Concatenate String Operator
console.log('Hello' + ' ' + 'world') // logs 'Hello world' to the console

// Concatenate Assignment Operator
let str = 'Hello ';
str += 'world';
console.log(str); // prints 'Hello world' to the console

// 2. With String Methods //
// Split()
// Splits a string into an array by a given separator
let abc = 'abc';
let abcToArray = abc.split('') // splits string at each letter
console.log(abcToArray); // prints =>['a', 'b', 'c'] to the console

// Slice()
// Returns a selected section of string
let justA = abc.slice(0, 1); // slices the first letter, 'a', from 'abc'
console.log(justA); // prints => 'a' to the console

// toUpperCase()
// Capitalizes any alphabetic characters of the string it is applied to
let capitalized = justA.toUpperCase() // capitalizes the 'a' to 'A'
console.log(capitalized); // prints => 'A' to the console

// Replace()
// Replaces any string characters with a given input value
let whereIsTheWord = 'al%$@^&b)(***a*&6%$#2tr##$%^^&^os123s'
let ohItIsABird = whereIsTheWord.replace(/[0-9,!,@,#,$,%,^,&,*,(,)]/g, '') // replaces all characters listed in the brackets with an empty string
console.log(ohItIsABird) // prints => 'albatross' to the console