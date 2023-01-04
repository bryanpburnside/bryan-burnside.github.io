// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if(Array.isArray(value) === true) { // is the value an array?
        return true; // if yes, return true
    } else { // otherwise
        return false; // return false
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) === true) { // is the value an array?
        return false; // if yes, it is not an object
    } else if (value === null) { // is the value null?
        return false; // if yes, it is not an object
    } else if (value instanceof Date === true) { // is the value a date?
        return false; // if yes, it is not an object
    } else if (typeof value !== "object") { // is the value not an object?
        return false; // if yes, it is not an object
    } else { // otherwise
        return true; // it is an object
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    if (value === null) { // is the value equal to null?
        return false; // if yes, it is not an object or array
    } else if (value instanceof Date === true) { // is the value equal to date?
        return false; // if yes, it is not an object or array
    } else if (typeof value !== "object") { // is the value not equal to object?
        return false; // if yes, it is not an object
    } else { //otherwise
        return true; // it is an array or object
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (typeof value === 'string') { // is the value a string?
        return 'string'; // if yes, return string
    } else if (typeof value === 'number') { // is value a number?
        return 'number'; // if yes, return number
    } else if (Array.isArray(value) === true) { // is the value an array?
        return 'array'; // if yes, return array
    } else if (value === null) { // is the value null?
        return 'null'; // if yes, return null
    } else if (value instanceof Date === true) { // is the value a date?
        return 'date'; // if yes, return date
    } else if (typeof value === 'function') { // is the value a function?
        return 'function'; // if yes, return function
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
