/**
 * LOOPS:
 * 
 * 0. (INTRO)
 * 
 * 1. While, For, and For-In Loops:
 * 
 * 2. Loop Conditions (While):
 * 
 * 3. Looping and Arrays (For):
 * 
 * 4. Looping and Objects (For-In):
 */

// 1. While, For, and For-In Loops //



// 2. Loop Conditions (While) //

// Loop Forwards to Ten //

let count = 1;

while(count <= 10) {
    console.log(count);
    count++
}

// Loop Backwards to Zero //

let iterations = 10;

while(iterations >= 0) {
    console.log(iterations);
    iterations--
}

// 3. Looping and Arrays (For) //

let array = [1, 2, 3, 4, 5]

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}
// 4. Looping and Objects (For-In) //

const person = {
    name: 'Bryan',
    age: 33,
    cohort: 'Charlie'
}

for(let key in person) {
    return key;
}

for(let key in person) {
    return person[key];
}