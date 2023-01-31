/**
 * OPERATORS:
 * 
 * 0. Operators act on data. They can be used to initialize variables to values, perform mathematics, compare values, or
 * return what a value is. Operators are sorted by how many operands they require (unary - 1, binary - 2, and ternary - 3). 
 * 
 * 1. Assignment Operators: Assignment operators are used for initializing a variable to a value via the equal sign (=).
 * They can also involve combining the equal sign with various arithmetic operators. 
 * 
 * 2. Arithmetic Operators: Arithmetic operators include all of the math symbols we know and love for addition, subtraction,
 * multiplication, division (+, -, *, /), exponent (**), remainder (%), and increment and decrement (++, --).
 * 
 * 3. Comparison Operators: Comparison operators include the symbols we use to compare, like greater than or less than (>, <),
 * equal to or not equal to (==, !=), and also a mode of checking strict equality, which compares
 * both value and type (===, !==).
 * 
 * 4. Logical Operators: Logical operators are used to indicate 'and' (&&), 'or' (||), and 'not' via the bang symbol (!). 
 * 
 * 5. Unary Operators (!, typeof, -): Unary operators have just one operand. They include type operators, like typeof, which returns the type of a variable,
 * and also the bang operator (!), which returns the logical not when prepended to a value, and the negative sign (-), which sets positive values negative,
 * or negative values positive. 
 * 
 * 6. Ternary Operator (a ? b : c): The ternary operator has three operands and is a more concise way of performing an if-else statement. It involves
 * a condition, followed by a question mark, then what to return for if the given condition is true, a colon,
 * and what to return otherwise.
 */

// 1. Assignment Operators //

let number = 8; // here the equal sign is being used to assign number the value of 8

number += 2 // here the addition assignment operator is used to indicate number = number + 2
console.log(number) // prints => 10 to the console (8 + 2 = 10)

number -= 2 // here the subtract assignment operator is used to indicate number = number - 2
console.log(number) // prints => 8 to the console (10 - 2 = 8)

number *= 2 // here the multiplication assignment operator is used to indicate number = number * 2
console.log(number) // prints => 16 to the console (8 * 2 = 16)

number /= 2 // here the division assignment operator is used to indicate number = number / 2
console.log(number) // prints => 8 to the console (16 / 2 = 8)

number **= 2 // here the exponential assignment operator is used to indicate number = number ** 2
console.log(number) // prints => 64 to the console (8 * 8 = 64)

number %= 2 // here the remainder assignment operator is used to indicate number = number % 2
console.log(number) // prints => 0 to the console (because 2 times 32 is 64, and the remainder is 0)

// 2. Arithmetic Operators //

console.log(2 + 2) // prints => 4 to the console

console.log(2 - 2) // prints => 0 to the console

console.log(2 * 2) // prints => 4 to the console

console.log(2 / 2) // prints => 1 to the console

console.log(2 ** 2) // prints => 4 to the console

console.log(2 % 2) // prints => 0 to the console

// 3. Comparison Operators //

// with comparison operators, we have access to greater than (>) and less than (<)
let greaterThan = 1 > 0 ? true : false;
console.log(greaterThan) // prints => true to the console (because 1 is greater than 0)

let lessThan = 0 < 1 ? true : false;
console.log(lessThan) // prints => true to the console (because 0 is less than 1)

// we also have access to the equals (==) and strictly equals (===) operators
// unstrict allows values like a number and a string of the same number to resolve to true
let unstrict = 1 == '1' ? true : false;
console.log(unstrict); // prints => true to the console

// whereas strict does not consider values like a number and a string of the same number to be the same and resolves to false
let strict = 1 === '1' ? true : false;
console.log(strict); // prints => false to the console

//if we replace the first equal sign of equals or strictly equals bang symbol (!=, !==), we can make conditions were one value does not equal (or does not strictly equal) another
let doesNotEqual = 1 != '1' ? true : false
console.log(doesNotEqual) // prints => false to the console (since one does equal the string of one under unstrict conditions)

let doesNotEqualStrict = 1 !== '1' ? true : false
console.log(doesNotEqualStrict) // prints => true to the console (since one DOES NOT strictly equal the string of one)
// 4. Logical Operators //

// let's take a look at the logical operators 'and' (&&) and 'or' (||)

// the logical operator AND will check if BOTH conditions are true 
let and = 1 < 2 && 2 > 3 ? true : false; // since the first condition AND the second condition are not BOTH true 
console.log(and); // prints => false to the console 

// the logical operator OR will check if EITHER condition is true 
let or = 1 < 2 || 2 > 3 ? true : false; // since the first condition is true, it does not matter that the second condition is not 
console.log(or); // prints => true to the console

//the bang operator is also a logical operator, but we will discuss it in unary operators below

// 5. Unary Operators //

let one = 1; // let's declare a variable called one and assign it the value of the number one and see how it interacts with various unary operators

// if we wanted the 'logical not' of one, we could use the bang operator
console.log(!one); // prints => false to the console (since JavaScript will convert the value to it's opposite boolean)
// here, we can use the bang operator to check if something does not equal one

// the bang (or logical not) should not be confused with negative, which can be accessed by implementing the - sign
console.log(-one); // prints => -1 to the console

// typeof, a type operator can be used to check a value for its type
console.log(typeof one); // prints => 'number' to the console
// here, we can see that typeof's value is a string representing the type of value that 'one' is, a number

// 6. Ternary Operator //

//let's say we wanted to write a function that checked if a was less than b
//within that function we could have an if-statement that checks if a is less than b and returns true if it is, and otherwise it returns false

let aLessThanB = function(a, b) {
    if(a < b) {
        return true; 
    } else { 
        return false; 
    }
}
console.log(aLessThanB(1, 2)); // prints => true to the console

// we could also write this same function using ternary operators

let aLessThanBTernary = function(a, b) { return 1 < 2 ? true : false; }
console.log(aLessThanBTernary(1, 2)); // prints => true to the console
