// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  return array.reduce((acc, curr) => { // reduce the array and set the seed val to an empty array
    return acc.concat(curr); // return the accumulator concatenated with each of current arrays
  }, [])
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  if(!test(value)) { // if the test on the value is false
    return; // break the loop
  }
  body(value); // otherwise call the body function and pass the current value to it 
  return loop(update(value), test, update, body) // and recursively return the loop, but use the update function on the value
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for(let i = 0; i < array.length; i++) { // loop through the array
    if (!test(array[i])) { // if the test on an element in the array resolves to false
      return false; // then return false
    }
  }
  return true; // otherwise, all elements passed the test so return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
  let ltr = 0; // create variable to keep track of ltr scripts
  let rtl = 0; // create variable to keep track of rtl scripts
  for(let i = 0; i < string.length; i++) { // loop through the string
    let script = characterScript(string.charCodeAt(i)); // let script = object | null
    if(script !== null) { // if the script does not equal null
      script.direction === 'ltr' ? ltr++ : rtl++; // check the value of its direction property equals ltr, if so add one, otherwise add one to rtl
    }
  }
  return ltr > rtl ? 'ltr' : 'rtl'; // if ltr is greater than rtl, return 'ltr', otherwise return 'rtl'
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
