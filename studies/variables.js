/**
 * VARIABLES:
 * 
 * 0. To hold things in memory during the life-cycle of a program, we can use variables. Variables are named identifiers that
 * can point to values of a particular type, like a Number, String, Boolean, Array, Object or another data-type. Variables are
 * called so because once created, we can CHANGE the value (and type of value) to which they point.
 * 
 * 1. Declaration and Assignment: To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
 * 1a. There are 2 phases of using variables: declaration and initialization (or assignment).
 * 1b. We can also reassign, or update, variables to any other value
 * 
 * 2. Var, Let, and Const: In ES6, other keywords were added to JavaScript to declare variables: let and const.
 * These keywords were created due to developers frustrations with var, and its limitations, such as being capable of redeclaration.
 * 
 * 3. Hoisting: Hoisting refers to the process where JavaScript interpreters seem to lift the declarations of variables and functions 
 * to the top of the global scope before executing code. 
 * 
 */

// 1. Declaration //
// At the declaration phase, the variable myName is undefined because we have not initialized it to anything
var myName;
console.log(myName); // prints => undefined

// 1a. Initialization or Assignment //
// When you assign a value to an undeclared variable
myName = 'Bryan';
console.log(myName); // prints => Bryan

// 1b. Re-assignment //
// Changing or updating the value of a previously assigned variable
myName = 'New';
console.log(myName); //prints => New

// 2. Var, Let, and Const //
var thisCanBeRedeclared;
var thisCanBeRedeclared;
console.log(thisCanBeRedeclared) // prints => undefined, rather than throwing an error
let thisCantBeRedeclared;
let thisCantBeRedeclared; // throws an error, since let cannot be redeclared

// Unlike let, const must be be initialized when declared:

const personA; // throws an error because constants must be initialized when declared
const personB = { // const is useful in initializing variables representing collections, like arrays and objects,
    name: 'Bryan Burnside', // where we want the data to remain static or constant
    age: 33
}

//3. Hoisting //

// var declarations get hoisted to the global scope with a default initialization of undefined when declared in all types of code blocks, except functions
// let and const declarations get hoisted without a default initialization, so we can treat them as if they DO NOT get hoisted

if(hoisted) {
    return false;
} else {
    var hoisted = true;
}
console.log(hoisted); // prints => true (because the initialization in the else code block gets hoisted)

if(notHoisted) {
  return false;
} else {
  let notHoisted = 1
}

console.log(notHoisted); // prints ReferenceError: notHoisted is not defined (because the initialization in the else code block does not get hoisted)

//var does not get hoisted when declared in functions:

function varTrapped(x) {
    var trapped = true;
}
console.log(trapped); // prints => ReferenceError: trapped is not defined