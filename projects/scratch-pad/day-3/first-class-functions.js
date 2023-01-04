// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function tester(value) { // function to test value
        if (value > base) { // is value is greater than base?
            return true; // if yes, return true
        } else { // otherwise
            return false; // return false
        }
    } 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function tester(value) { // function to test value
        if (value < base) { // is value less than base?
            return true; // if yes, return true
        } else { // otherwise
            return false; // return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function tester(string) { // function to test string
        if(string[0].toUpperCase() === startsWith.toUpperCase()) { // is the first value of the string is the same as startsWith (regardless of case)?
            return true; // if yes, return true
        } else { // otherwise
            return false; // return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function tester(string) { // function to test a string
        if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase()) { // is the last value of the string is the same as startsWith (regardless of case)? 
            return true; // if yes, return true
        } else { // otherwise
            return false; // return false
        }
    }    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    const collection = []; // an array to collect the modified strings
    for(let i = 0; i < strings.length; i++) { // looping over the strings array
        collection.push(modify(strings[i])); // pushing modified strings to collection array
    }
    return collection; // returning the collection of modified strings
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    const checked = []; // array to check if any tested strings do not pass
    for(let i = 0; i < strings.length; i++) { // looping over the strings array
        if(test(strings[i]) === false) { // checking if the strings do not pass the test
            checked.push(strings[i]); // if not, push the strings to the checked array
        }
    }
    if (checked.length === 0) { // if the checked array has no length
        return true; // return true (all tests passed)
    } else { // otherwise
        return false; // return false
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
