////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let numbers = []; // an empty array to hold our numbers
  if(start > end && step <= 0) { // if start is greater than end and the step is less than or equal to zero
    for(let i = start; i >= end; i += step) { // 
      numbers.push(i);
    }
  } else if(start < end && step >= 0){ // if start is less than end and the step is greater than or equal to zero
      for(let i = start; i <= end; i += step) { // 
      numbers.push(i); // 
    }
  } else { // otherwise
    return []; // we would iterate infinitely, so just return an empty array
  }
  return numbers;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  if(array.length === 0) { // if the array is empty
    return 0; // return 0
  }
  if(array.length === 1) { // if the array length equals one
    return array[0]; // return that element
  }
  return array[0] + sum(array.slice(1)); // return the first element + every other element (as slice will remove the current element on each recursive loop)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let newArray = []; // create a new array for the reverse array elements
  for(let i = array.length - 1; i >= 0; i--) { // loop in reverse through the array
    newArray.push(array[i]); // push the elements to the new array
  }
  return newArray; // return the new array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  for(let i = 0; i < array.length; i++) { // loop through the array
    array.splice(i, 0, array.pop()); // replace the current index with the last element on each iteration until the entire array is reversed
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let list = null; // set list equal to null
  for(let i = array.length - 1; i >= 0; i--) { // iterate through array in reverse
    list = {value: array[i], rest: list}; // on each iteration reset the value of list to an object containing the value set to the current array element, and rest set to list
  }
  return list; // return list
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(object, output = []) {
  if(object.rest === null) { // if the rest equals null, there are no more rest objects
    output.push(object.value); // so push the last value to the output array
    return output; // and return the output
  }
  output.push(object.value); // push the current value to the output array
  return listToArray(object.rest, output); // recursively call the function on the rest object
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(number, list) {
  return list = {value: number, rest: list}; // return list as an object containing the keys of value and rest, where the value is the number argued, and rest is the initial list
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, i, counter = 0) { // add a counter to the function params to keep track of recursive loops
  if(i < 0) { // if i is less than 0
    return undefined; // return undefined
  }
  if(counter === i) { // if the counter equals i
    return list.value; // return the current list value
  }
  counter++; // increment the counter to keep track of each recursive call
  return nth(list.rest, i, counter); // return the function on list.rest, i, and the counter
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // determine if x && y are both not objects
  if(typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  // determine if either x or y are not objects
  if(typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  // create arrays of each item's keys
  let xKeys = Object.keys(x); // ['a']
  let yKeys = Object.keys(y); // ['a']
  // determine if the lengths aren't equal
  if(xKeys.length !== yKeys.length) {
    return false;
  }
  // iterate through the xKeys
  for(let i = 0; i < xKeys.length; i++) {
    // if the keys dont match or the values at the keys don't match
    if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
