// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if(n < 0) { // edge: if n is less than zero
    return null; // return null
  } 
  if(n === 0) { // base: if n equals zero
    return 1; // return 1
  } else { // recursion
  return n * factorial(n - 1); // return n times the function of n minus one
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total = 0) {
  if(array.length === 0) { // base: if the length of the array equals zero
    return 0; // return 0
  }
  if(array.length === 1) { // if the length of the array is one
    total += array[0]; // add the last array element to the total
    return total; // return the total
  }
    total += array[0]; // set total plus equal to the array element
    return sum(array.slice(1), total); // return the function and total, but slice the first element from the array
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  if(n === 1) { // if n equals one
    return false; // return false (it is odd)
  }
  if(n === 0) { // if n equals zero
    return true; // return true (it is even)
  }
  return isEven(Math.abs(n) - 2); // return the function of the absolute value of n (handles neg or pos) minus 2
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) { // base: if n equals zero
    return 0; // return zero
  }
  if(n > 0) { // if n is greater than zero
    n--; // decrement n
    return n + sumBelow(n); // return n plus the function
  }
  if(n < 0) { // if n is less than zero
    n++; // increment n
    return n + sumBelow(n); // return n + the function
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  if(x === y) { // base 1: if x equals y
    return []; // return an empty array
  }
  if(x - 1 === y) { // base 2: if y equals x - 1
    return output; // return the output array
  }
  if(x === y - 1) { // base 3: if x equals y - 1
    return output; // return the output array
  }
  if(x < y) { // if x is less than y
  x++ // increment x
  output.push(x) // push x to the output array
  return range(x, y, output); // return the function
  }
  if(x > y) { // if x is greater than y
    y++ // increment y
    output.unshift(y) // unshift y to the output array
    return range(x, y, output); // return the function
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if(exp === 0) { // if the exp equals 0, return 1
    return 1; // return 1
  }
  if(exp > 0) { // if exp is pos
    return base * exponent(base, exp - 1) // return the base multiplied by itself until the exp decrements to 0
  }
  if(exp < 0)  { // if exponent is neg
    return 1 / exponent(base, -exp) // return 1 divided by the function and switch the exp to pos (this will cause the function to now use the pos exp case and divide it by 1 at the end) 
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
if(n === 1) { // if n equals one
  return true; // n is one, or n is divisible by 2, so return true
}
if(n < 1) { // if n is less than one
  return false; // n is not divisible by two, so return false
}
return powerOfTwo(n / 2); // return the function of n divided by 2
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if(string.length === 1) { // if the string's length is equal to one
    return string[string.length - 1]; // return the last letter in the string
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1)); // return the last element + a function of the string minus the last letter
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string, unspaced = string.split(" ").join("").toLowerCase()) { // first we are setting a secondary variable called unspaced, spliting it/rejoining it to remove the spaces, and making it case-insensitive
  if(unspaced.length <= 1) { // if unspaced contains one letter or fewer
    return true; // it is a palindrome
  }
  if(unspaced[0] === unspaced[unspaced.length - 1]) { // if the first letter of unspaced matches the last letter
    return palindrome(string, unspaced.slice(1, unspaced.length - 1)); // return the function, but with the first and last letter of unspaced removed 
  }
  return false; // otherwise, if any of the above fails, the string is not a palindrome
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y, sum = 0) {
  if(x === 0 || y === 0) { 
    return sum; 
  }
  if(x > 0 && y > 0) { 
    sum += x; 
    return multiply(x, y - 1, sum);
  }
  if(x < 0 && y < 0) { 
    sum -= x; 
    return multiply(-x, -y - 1, sum); 
  }
  if(x < 0 && y > 0) { 
    sum += x; 
    return multiply(x, y - 1, sum); 
  }
  if(x > 0 && y < 0) { 
    sum += y;
    return multiply(x - 1, y, sum);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, output = '') {
  if(str1.length === 0 && str2 === output + str1) { // if str1's length is zero and str2 equals the output plus str1
    return true; // return true
  }
  if(str1.length === 0 && str2 !== output) { // if str1's length equals zero and str2 does not equal the output
    return false; // return false
  }
  output += str1[0]; // output += str1's current value
  return compareStr(str1.slice(1), str2, output); // return the function but slice the first value from str1 each time
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){
  if(str.length === 0) { // is str equals zero
    return output; // return output
  }
  output.push(str[0]); // push the current string value to output
  return createArray(str.slice(1), output) // return the function but slice the current value from the string
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
  if(array.length === 0) { //if the arrays length is zero
    return output; // return the output
  }
  output.push(array[array.length - 1]); // push the last element of the array to the output
  return reverseArr(array.slice(0, array.length - 1), output); // return the function but slice the last element from the array
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) { // call the function, but add an output array for out values
  if(length === 0) { // base: if length equals zero
    return output; // return the output array
  }
  output.push(value); // each recursive call we will: push the value to output
  length--; // decrement length
  return buildList(value, length, output); // and return the function of value, length, and output
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output = []) { // call the function but add an output array param
  if(array.length === 0) { // base: if the array length equals zero
    return output.length; // return the length of the output array
  }
  if(array[0] === value) { // if the current array element equals the value argued
    output.push(array[0]); // put that value to the output array
  }
  return countOccurrence(array.slice(1), value, output); // return the function, but slice the current array element from the array
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) { // call function, but add an output array
  if(array.length === 0) { // base: if the array length equals zero
    return output; // return the output array
  }
  output.push(callback(array[0])); // push the callback of the current array element to the output array
  return rMap(array.slice(1), callback, output); // return the function, but slice the current element from the array
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n, output = [0, 1], sequence = [0]) {
  if(n < 0) { 
    return null; 
  }
  if(n === 0) { 
    return sequence; 
  }
  sequence.push(output[1]);
  output.push(output[0] + output[1]);
  return fibonacci(n - 1, output.slice(1), sequence);
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n, output = [0, 1]) {
  if(n < 0) { // base: if n is neg
    return null; // return null
  }
  if(n === 0) { // base 2: if n equals zero
    return output[0]; // return 0
  }
  output.push(output[0] + output[1]); // put the value of adding the first and second array values to the output array 
  return nthFibo(n - 1, output.slice(1)); // decrement n, and slice the first value from the array 
};


// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) { // call function but add output array param
  if(input.length === 0) { // base: if the length of the input array is zero
    return output; // return the output array
  }
  output.push(input[0].toUpperCase()); // push the current input to uppercase into the output array
  return capitalizeWords(input.slice(1), output); // return the function, but slice the current input array element
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) { // call function, but add output param
  if(array.length === 0) { // if array's length equals zero
    return output; // return the output array
  }
  output.push(array[0].slice(0, 1).toUpperCase() + array[0].slice(1)); // push the first letter of the current array ele to uppercase + the rest of the letters
  return capitalizeFirst(array.slice(1), output); // return the function, but slice the current array ele from the array
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

//* 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if(str.length === 0) { // if the string's length is zero
    return obj; // return the obj
  }
  if(!obj[str[0]]) { // if the key of the letter does not exist
    obj[str[0]] = 1; // create it and give it a value of one
  } else { // otherwise
  obj[str[0]]++; // increment its value
  }
  return letterTally(str.slice(1), obj); // return the function recursively, but slice the current letter from the str
};

//* 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {
if(list.length === 0) { // if the list's length equals zero
  return output; // return the output
}
if(list[0] === list[1]) { // if the first list element matches the second list element
  list.slice(1); // slice the first element
} else { // if it does not match
output.push(list[0]); // push the element to the output array
}
return compress(list.slice(1), output); // return the recursive function call, but slice the first element from the list
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

//* 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
  if(array.length === 0) { // if the array's length equals zero
    return output; // return the output
  }
  if(array[0] === array[1] && array[0] === 0 && array[1] === 0) { // if the first array element matches the second array element (and they are both zero)
    array.slice(1); // slice the first element
  } else { // if it does not match
  output.push(array[0]); // push the element to the output array
  }
  return minimizeZeroes(array.slice(1), output); // return the recursive function call, but slice the first element from the array
};

//* 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {
  if(array.length === 0) { // if the array length is zero
    return output; // return the output
  }
  if(array[0] > 0) { // if the current array element is pos
    output.push(array[0]); // push it to the output
  } else if(array[0] < 0) { // else if it is neg
    output.push(-array[0]); // push the opposite to the output
  }
  if(array[1] > 0) { // if the second array element is pos
    output.push(-array[1]) // push it to the output as neg
  } else { // otherwise
    output.push(array[1]) // push the array element
  }
  return alternateSign(array.slice(2), output); // return the function but slice the current two elements from the array each recursive loop
};

//* 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], output = []) { // add an output array, and an array of ones digits strings
  if(str.length === 0) { // base: if the length of the str is zero
    return output.join(""); // return the output array joined
  }
  if(isNaN(parseFloat(str[0]))) { // if the current string value is not a number
    output.push(str[0]); // push the current string value to the output array
  }
  if(!isNaN(parseFloat(str[0]))) { // if the current string value is a number
    output.push(ones[str[0]]) // push the number in the ones array at the index of the current string value
  }
  return numToText(str.slice(1), ones, output); // return the function recursively, but slice the first value from the string
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
