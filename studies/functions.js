/**
 * FUNCTIONS:
 * 
 * 0. Functions are a type of data that allows us to hold on to code, and run that code block whenever we wish to. 
 * 
 * 1. Function Declaration and Invocation: When we create a function, this is known as declaring it. Once we wish to execute the function we have declared,
 * we invoke (a.k.a. call) the function.
 * 
 * 2. Parameters and Arguments: Parameters and arguments are two sides of the same coin. When we declare a function, we can set parameters that let us
 * know the use case for the function (i.e. string or array). Once we actually call (or invoke) this function, the string or array we pass into the function as those
 * parameters are called arguments.
 * 
 * 3. Named Functions: Named functions are declared with the word 'function' followed by a name that describes the use case of the function (i.e. concatStrings for a function 
 * which concatenates two strings). These functions are hoisted to the top of their scope, which means we have access to the functions regardless of where we declare them
 * in our code. 
 * 
 * 4. Function Expressions: Unlike named functions, function expressions utilize anonymous functions. Anonymous functions can be initialized to variables or passed into other
 * functions. When we create a function expression, it will not be hoisted to the top of the scope, so we have to be more intentional with where we place function expressions
 * in our code. In JavaScript we can pass anonymous functions into other functions as if they were values, and we can assign functions to variables as if they were values. These
 * qualities are exemplary of functions being 'first-class objects' in JavaScript.  
 * 
 * 5. Inputs and Outputs: Functions can /optionally/ take inputs (or arguments) and /optionally/ return a value. Because functions resolve to values, we can consider functions
 * to be expressions in our code, and can utilize them as values. Alternatively, functions don't have to take any inputs or return values. Constructor functions take inputs
 * representing keys of objects and don't return anything, but they can be used to initialize variables and create objects.
 * 
 * 6. Scope: When we talk about scope in JavaScript, we are talking about where variables can be accessed. Variables can be scoped in three ways: globally, locally/function,
 * and block. Globally scoped variables are declared in the global scope and are accessible anywhere in our code. Local or function scoped variables are accessible only within
 * functions. And block scoped variables are confined to if-statements and loops. With functions, the inner (or child) function always has access to the outer (or parent) function,
 * but not vice-versa. This is called nested scope, and it allows us to create private variables, which are inaccessible to the rest of our application. 
 * 
 * 7. Closures: We can utilize the nested scope of our functions to form closures. When a child function refers to the variables declared in its parent's scope, this creates
 * a closure. If an object retured from the function is held in memory somewhere (referenced), that closure stays alive and data can continue to exist in these closures.
 */

// 1. Function Declaration and Invocation //

function declared() { // Here we declare a function called declared
    console.log('I exist');
}

declared() // Here we invoke (or call) the function, which will execute it's code block printing => 'I exist' to the console

// 2. Parameters and Arguments //

function multiply(num1, num2) { // Here we declare a function called multiply that takes two parameters, num1 and num2
    return num1 * num2;
}

multiply(6, 4); // Here we invoke the function and pass the arguments 6 and 4, which then get passed as the num1 and num2 inside the function

console.log(multiply(6, 4)); // prints => 24 to the console

// 3. Named Functions //

concatStrings('Hello', ' world!'); // As named functions are hoisted to the top of the global scope, we can call this function before initializing it!
console.log(concatStrings('Hello', ' world!')); // prints => 'Hello world' to the console

function concatStrings(string1, string2) { // Named functions are declared via the word 'function' followed by a name
    return string1 + string2;
}

// 4. Function Expressions //

tag() // Throws a reference error, because function expressions are not hoisted

let tag = function() { // Here we set a variable 'tag' to an anonymous function
    if(Math.random() > 0.5) {
        console.log(`You're it!`)
    } else {
        console.log(`You narrowly escaped!`)
    }
}

// 5. Inputs and Outputs //

let thisFunctionResolvesToOne = function() { // Here, we declare a variable and set it's value to a function which resolves to 1
    return 1;
}

multiply(thisFunctionResolvesToOne(), 8); // We can pass this function expression are an argument into the multiply function we created earlier
console.log(multiply(thisFunctionResolvesToOne(), 8)); // prints => 8 

// 6. Scope //

let globally = `I'm a globally scoped variable`

function sameHere() { // the sameHere function is also globally scoped
    let locally = 5; // but the variable, locally, is local or function scoped
    console.log(locally); // prints => 5 to the console
    if(locally < 10) {
        let blocked = 10; // the variable, blocked is block-scoped
        console.log(blocked); // prints => 5 to the console
    } else {
        blocked = 5;
    }
    console.log(blocked); // Throws a reference error, as 'blocked' is not defined outside of its scope
}
console.log(locally) // Throws a reference error, because locally is not accessible outside the function

// 7. Closures //

function greet() { // parent function
    let name = 'Bryan'; // variable defined outside the child function
    function displayName() { // child function
        return `How are you ${name}?`; // because the child function is accessing the name variable in its parent scope, this is a closure
    }
    return displayName;
}

const greeted = greet();
console.log(greeted); // returns the function definition
console.log(greeted()); // returns the value