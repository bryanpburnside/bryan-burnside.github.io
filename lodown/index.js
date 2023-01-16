'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns input value unchanged.
 * 
 * @param {Any value}: Function takes a value.
 * @returns {Any value}: Function returns input value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Returns a string representing type of input value.
 * 
 * @param {Any value}: Function takes a value.
 * @returns {string}: Function returns string of type of input value.
 */

function typeOf(value) {
    if(typeof value === 'string') {
        return 'string';
    } else if(Array.isArray(value) === true) {
        return 'array';
    } else if(value === null) {
        return 'null';
    } else if(typeof value === 'number') {
        return 'number';
    } else if(typeof value === 'boolean') {
        return 'boolean'
    } else if(value === undefined) {
        return 'undefined';
    } else if(typeof value === 'object') {
        return 'object';
    } else if (typeof value === 'function') {
        return 'function';
    }
}
module.exports.typeOf = typeOf;

/**
 * first: Returns the first element or elements in array.
 * 
 * @param {an array}: Function takes an array.
 * @param {a number}: Function takes a number.
 * @returns {array}: If the array argument passed is not an array, returns []  
 * If the number argument passed is not given or not a number, it returns just the first element in array.
 * Otherwise, returns the specified number of elements, starting with the first.
 */

function first(array, number) {
    if(Array.isArray(array) === false || number < 0) {
        return [];
    } else if(number === undefined || typeof number !== 'number') {
        return array[0];
    } else if(array.length < number) {
        return array;
    } else {
        return array.slice(0, number);
    }
}
module.exports.first = first;

/**
 * last: Returns the last element or elements in array.
 * 
 * @param {an array}: Function takes an array.
 * @param {a number}: Function takes a number.
 * @returns {array}: If the array argument passed is not an array, returns []  
 * If the number argument passed is not given or not a number, it returns just the last element in array.
 * Otherwise, returns the specified number of elements, starting with the last.
 */

function last(array, number) {
    if(Array.isArray(array) === false || number < 0) {
        return [];
    } else if(number === undefined || typeof number !== 'number') {
        return array[array.length - 1];
    } else if(array.length < number) {
        return array;
    } else {
        return array.slice(array.length - number, array.length);
    }
}
module.exports.last = last;

/**
 * indexOf: Iterates through an array, checking if it's elements match
 * the value argued. If they match, the index is returned, otherwise -1 is returned.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Value}: Function takes in any value.
 * @returns {Number}: If element matches value, returns index, otherwise, returns -1.
 */
function indexOf(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Checks an array to see if a value is contained in it.
 * Returns true if the array contains the value and false if not.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Value}: A value we would like to check for in the array.
 * @returns {Boolean}: If the array includes the value, returns true, otherwise it returns false.
 */
 function contains(array, value) {
    return(array.includes(value) ? true : false);
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * unique: Designed to loop over an array and push its unique values to a new array,
 * which is then returned.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @returns {Array}: Returns an array devoid of duplicates.
 */
function unique(array) {
    let unique = [];
    for(let i = 0; i < array.length; i++) {
        array.indexOf(array[i]) === i ? unique.push(array[i]) : null
    }
    return unique;
}
module.exports.unique = unique

/**
 * filter: Designed to loop over an array and push values to a new array,
 * if they are true, then return the new array.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection, and if true, the values are pushed to a new array
 * @returns {Array}: Returns the new array of values
 */
function filter(array, test) {
    let filtered = [];
    for(let i = 0; i < array.length; i++) {
        test(array[i], i, array) ? filtered.push(array[i]) : null;
    }
    return filtered;
}
module.exports.filter = filter

/**
 * reject: Designed to loop over an array and push values to a new array,
 * if they are false, then return the new array.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection, and if false, the values are pushed to a new array
 * @returns {Array}: Returns the new, array of values
 */
function reject(array, test) {
    let rejected = [];
    for(let i = 0; i < array.length; i++) {
        !test(array[i], i, array) ? rejected.push(array[i]) : null;
    }
    return rejected;
}
module.exports.reject = reject

/**
 * partition: Designed to loop over an array and be passed to a function which will 
 * push true values to one array and false values another array, then return both
 * the true and false arrays in another array.
 * 
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection, and if true, the values are pushed to a "true" array and if false
 * the values are pushed to a "false" array
 * @returns {Array}: Returns the new, partitioned array of arrays
 */
function partition(array, test) {
    let partitionedT = [];
    let partitionedF = [];
    for(let i = 0; i < array.length; i++) {
        test(array[i], i, array) ? partitionedT.push(array[i]) : partitionedF.push(array[i]);
    }
    return [partitionedT, partitionedF];
}
module.exports.partition = partition

/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection modifying them and pushing
 * them to a new array, then returns the modified array.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns {Array}: Returns an array of modified/mapped elements
 */
function map(collection, callback) {
    let mapped = [];
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
           mapped.push(callback(collection[i], i, collection));
        }
    } else {
        for(let key in collection) {
            mapped.push(callback(collection[key], key, collection));
        }
    }
    return mapped;
}
module.exports.map = map