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



// 4. Logical Operators //



// 5. Unary Operators //



// 6. Ternary Operator //