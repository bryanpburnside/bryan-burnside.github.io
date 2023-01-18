'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: Returns input value unchanged.
 * 
 * @param {Any Value}: Function takes a value.
 * @returns {Any Value}: Function returns input value unchanged
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: Returns a string representing type of input value.
 * 
 * @param {Any Value}: Function takes a value.
 * @returns {String}: Function returns string of type of input value.
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
 * @param {An Array}: Function takes an array.
 * @param {A Number}: Function takes a number.
 * @returns {Array}: If the array argument passed is not an array, returns []  
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
 * @param {An Array}: Function takes an array.
 * @param {A Number}: Function takes a number.
 * @returns {Array}: If the array argument passed is not an array, returns []  
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
 * @param {Array} collection: The collection we would like to check.
 * @param {Any Value}: Any value we would like to check for in the array.
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
 * @param {Function} action: The function to be applied to each value in the 
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

/**
 * pluck: Designed to loop over an array of objects, and add the values of the
 * objects properties to a new array, then returns the new array.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Property}: The property of the object
 * @returns {Array}: Returns new array
 */

function pluck(array, property) {
    let plucked = array.map(function(array) { //loops through the array
       return array[property]; // adds property values to new array
    })
    return plucked; // return new array
}
module.exports.pluck = pluck

/**
 * every: Designed to loop over a collection, Array or Object, and tests that all elements
 * in the function are true or false. If any are false, it returns false, otherwise it returns true.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * @returns {Boolean}: Returns true or false
 */

function every(collection, callback) {
    if(Array.isArray(collection)) { 
        if(!callback) { 
            for(let i = 0; i < collection.length; i++) { 
                if(!collection[i]) { 
                    return false; 
                }
            }
            return true; 
        }
        for(let i = 0; i < collection.length; i++) { 
            if(!callback(collection[i], i, collection)) { 
                return false;
            }
        }
        return true;
    } else { 
        if(!callback) { 
            for(let key in collection) { 
                if(!collection[i]) { 
                    return false; 
                }
            }
            return true;
        }
        for(let key in collection) {
            if(!callback(collection[key], key, collection)) {
                return false;
            }
        }
        return true;
    }
}
module.exports.every = every

/**
 * some: Designed to loop over a collection, Array or Object, and tests that all elements
 * in the function are true or false. If any are true, it returns true, otherwise it returns false.
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * @returns {Boolean}: Returns true or false
 */
function some(collection, callback) {
    if(Array.isArray(collection)) { 
        if(!callback) { 
            for(let i = 0; i < collection.length; i++) { 
                if(collection[i]) { 
                    return true; 
                }
            }
            return false; 
        }
        for(let i = 0; i < collection.length; i++) { 
            if(callback(collection[i], i, collection)) { 
                return true; 
            }
        }
        return false; 
    } else { 
        if(!callback) { 
            for(let key in collection) { 
                if(collection[i]) { 
                    return true; 
                }
            }
            return false; 
        }
        for(let key in collection) { 
            if(callback(collection[key], key, collection)) { 
                return true; 
            }
        }
        return false; 
    }
}
module.exports.some = some

/**
 * reduce: Reduce takes a function that loops through an array and 
 * builds a value by repeatedly taking a single element
 * from the array and combining it with the current value.
 * @param {Array} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the collection.
 * @param {Any Value}: A seed value / accumulator 
 * @returns {Any Value}: Returns accumulated value of seed, or a numeric value if no seed is given
 */
function reduce(array, callback, seed) {
    let result; 
    if(seed === undefined) {
        result = array[0] 
        for(let i = 1; i < array.length; i++) {
            result = callback(result, array[i], i, array);
        }
    } else {
        result = seed;
        for(let i = 0; i < array.length; i++) {
           result = callback(result, array[i], i, array);
        }
    }
return result;
}

module.exports.reduce = reduce

/**
 * extend: A function which takes a target object as its first parameter and then any number of additional objects
 * as it's other parameters to be copied into the target object, which it then returns
 * @param {Object} collection: The starting / target object.
 * @param {Object(s)} collection(s): Any number of additional objects.
 * @returns {Object}: Returns the first object combined with any additional object arguments properties.
 */
_.extend = function(object, ...objects) {
    return Object.assign(object, ...objects);
}
module.exports.extend = extend