/**
 * CONTROL-FLOW:
 * 
 * 0. Control-flow in JavaScript, and all programming languages, is about how we go about controlling the flow of our
 * data. To direct this flow of data, we can utilize combining conditionals with if-statements, else-if statements,
 * else statements, and switch statements.
 * 
 * 1. If: We use if to run code if a condition we define is true.
 * 
 * 2. Else-If: We use else-if to define a new condition if the initial if-condition resolves to false.
 * 
 * 3. Else: We use else to run code if all previous conditions evaluate to false.
 * 
 * 4. Switch: We use switch-statements to run various blocks of code depending on the condition.
 * 
 */

// 1. If //
let lessThanFive =  a => {
    if(a < 5) { // checks if this conditional is true
        return true; // and if so, runs this code block
    }
}
console.log(lessThanFive(3)) // here we pass 3 in for a, and since 3 is less than five, true will print to the console
// 2. Else-If //

let letterGrade = number => { // so lets say we write a function to tell you your letter grade based on your number grade
    if(number >= 90) { // if this condition resolves to true
        console.log('A'); // print => 'A' to the console
    } else if (number >= 80) { // else if this condition resolves to true
        console.log('B'); // print => 'B' to the console
    } else if (number >= 70) { // else if this condition resolves to true
        console.log('C'); // print => 'C' to the console
    } else if (number >= 60) { // else if this condition resolves to true
        console.log('D'); // print => 'D' to the console
    } else if (number < 60) // else if this condition resolves to true
        console.log('F'); // print => 'F' to the console
}
letterGrade(89); // let's call the function with the arguement of 89. the function will pass 89 into the if statement, and since 89 is less than 90, it will then get passed into the else-if, and since 89 >= 80, 'B' will print to the console

// 3. Else //
let groundIs = text => { // groundIs is a function that takes in a parameter, text
    if(text !== 'lava') { // if text does not equal 'lava'
        console.log('You are alive'); // print => 'You are alive' to the console
    } else { // else or otherwise
        console.log('You are dead'); // print => 'You are dead' to the console
    }
}
groundIs("lava") // let's call the function with the arguement of 'lava'. the function will pass 'lava' into the if statement, and since text DOES equal lava, the else statement will trigger and 'You are dead' will print to the console

// 4. Switch //

let cat = "Tabby";
switch (cat) {
    case "Tabby":
        console.log("a sweet orange guy"); // prints => "a sweet orange guy" (because variable cat has a value of 'Tabby')
        break;
    case "Calico":
        console.log("a great multi-colored guy"); // does not print unless the variable cat's value is 'Calico'
        break;
    case "Persian Blue":
        console.log("a blueish-grey guy"); // does not print unless the variable cat's value is 'Persian Blue'
        break;
    default:
        console.log("Ain't no kinda cat I seen"); // does not print unless the variable cat's value is not 'Tabby, Calico, or Persian Blue'
}