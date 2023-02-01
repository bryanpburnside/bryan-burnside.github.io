/**
 * LOOPS:
 * 
 * 0. Loops are a form of control flow which allows us to run a piece of code multiple times, based on a given condition, until that condition is met.
 * Loops simplify the access and manipulation large datasets, and offer us a fast, useful way to repeatedly execute code. 
 * 
 * 1. While, For, and For-In Loops: While loops allow us to loop until a given condition is met. For-loops allow us to iterate over arrays and access their elements.
 * For-in loops allow us to iterate over objects, giving us access to their keys and values. 
 * 
 * 2. Loop Conditions (While): While loops usually involve initializing a “count” variable and continuing to loop until that variable meets the given condition.
 * If we wish to loop incrementing from zero, we can initalize our count variable at 0, then increment it to a number, or we can initialize count to a positive number, 
 * and decrement it until that number reaches 0. 
 * 
 * 3. Looping and Arrays (For): For-loops involve three pieces of information, separated by semi-colons: initializing a variable, i, that acts as our start 
 * position, our loop condition, and our incrementer. In this way, they are perfect for iterating over arrays, because we can either set our incrementer (i) to
 * 0, if we wish to iterate forward through the array, or to the array's length - 1 when we want to iterate backwards through the array. 
 *  
 * 4. Looping and Objects (For-In): The for-in loop involves the initialization of a variable representing an object’s “key”, the word in, and an object.  
 */

// 1. While, For, and For-In Loops //



// 2. Loop Conditions (While) //

// Loop Forwards to Ten //

let count = 1;

while(count <= 10) { // while count (1) is less than or equal to ten, begin looping
    console.log(count); // prints => 1-10 to the console
    count++ // increment count by 1 at every loop
}

// Loop Backwards to Zero //

let iterations = 10;

while(iterations >= 0) { // while iterations (10) is greater than or equal to zero, begin looping
    console.log(iterations); // prints => 10-0 to the console
    iterations-- // decrement iterations by 1 at every loop
}

// 3. Looping and Arrays (For) //

let array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++) { // looping forwards through the array of numbers
    console.log(array[i]); // prints => 1, 2, 3, 4, 5 to the console
}

for(let i = array.length - 1; i >= 0; i--) { // looping backwards through the array of numbers
    console.log(array[i]); // prints => 5, 4, 3, 2, 1 to the console
}
// 4. Looping and Objects (For-In) //

const person = {
    name: 'Bryan',
    age: 33,
    cohort: 'Charlie'
}

for(let key in person) { // loops through the person object
    console.log(key); // prints (the keys) => 'name', 'age', and 'cohort' to console
}

for(let key in person) { // loops through the person object
    console.log(person[key]); // prints (the values) => the values 'Bryan', 33, and 'Charlie' to console
}