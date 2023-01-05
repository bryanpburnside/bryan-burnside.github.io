/**
 * VARIABLES:
 * 
 * 0. To hold things in memory during the life-cycle of a program, we can use variables. Variables are named identifiers that
 * can point to values of a particular type, like a Number, String, Boolean, Array, Object or another data-type. Variables are
 * called so because once created, we can CHANGE the value (and type of value) to which they point.
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our variable.
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 * 3. 
 */

// 1. declaration //
// At the declaration phase, the variable myName is undefined because we have not initialized it to anything
var myName;
console.log(myName); // prints => undefined

// 2. initialization or assignment //
// When you assign a value to an undeclared variable
myName = 'bryan';
console.log(myName); // prints => bryan

// 3. Re-assignment
// Changing or updating the value of a previously assigned variable
myName = 'new';
console.log(myName); //prints => new

// In ES6, other keywords were added to JavaScript to declare variables: let and const.
let myName; 
console.log(myName); // also prints => undefined
const myName; // throws an error because constants must be initialized when declared