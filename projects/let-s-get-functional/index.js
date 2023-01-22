// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./bryan-burnside.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
   return _.filter(array, customer => customer.gender === 'male').length; // return the length of the filtered customers array for all customers whose gender is male
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, current) { // reduce the customers array and set the accumulator to 0
        return current.gender === 'female' ? accumulator += 1 : accumulator; // if the current gender is female, increment the accumulator, otherwise return the accumulator
   }, 0);
   return females; // return the number of females
}

var oldestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) { // return the reduced array (do not set a value to the accumulator)
        if(accumulator.age < current.age) { // if the accumulator age value is less than the current age value
            return current; // return the current customer object
        } else { // otherwise
            return accumulator; // return the accumulator customer object (this will continue until only the oldest customer remains)
        }
    }).name // apply .name to the resolution of the array reduction to return the name of the oldest customer
    
}

var youngestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) { // doing the inverse of oldest customer (return the reduced array with no value set to the accumulator)
        if(accumulator.age > current.age) { // but this time, if the accumulator age value is greater than the current age value
            return current; // return the current customer object
        } else { // otherwise
            return accumulator; // return the accumulator customer object (this will continue until only the youngest customer remains)
        }
    }).name // apply .name to the resolution of the array reduction to return the name of the youngest customer
    
}

var averageBalance = function(array) {
    let modified = array.map(function(customer) { // use map to loop over the array
        return customer.balance.replace(/[$,\,]/g, "") // and return an array of the string balance values with the $ and comma removed
    })
    let balances = modified.reduce(function(accumulator, current) { // use reduce to loop over the modified array of string balances, setting the seed value to 0
        return parseFloat(accumulator) + parseFloat(current); // and turn all of the values to numbers while combining them into the accumulator
    }, 0)
    return balances / modified.length; // return the balance total, and divide by the length of the modified array to get the average
}

var firstLetterCount = function(array, letter) {
  let tester = _.filter(array, function(customer) { // filter the array and set the resulting array to a variable
       return customer.name[0] === letter.toUpperCase(); // if the first letter of the customer's name matches the letter argued, filter it into our array
    });
    return tester.length; // return the length of the array 
}

var friendFirstLetterCount = function(array, customer, letter) {
    let filtered = []; // create an array to hold the friends' names
    array.forEach(function(customers){ // loop through the array of customers
        if(customers.name === customer) { // if the customers name matches the customer argued
            customers.friends.forEach(function(friendNames) { // loop through that customer's array of friends
                return friendNames.name[0] === letter.toUpperCase() ? filtered.push(friendNames) : null // if the first letter of the friend's name matches the letter argued, push it to the array we made
            })
        }
    })
    return filtered.length; // return the length of the filtered array
}

var friendsCount = function(array, name) {
    let friendArray = []; // create an empty holder array
    array.forEach(function(customer) { // loop through the array of customers
      customer.friends.forEach(function(friendsNames) { // loop through the customers' arrays of friends
        return friendsNames.name === name ? friendArray.push(customer.name) : null; // if the friend's name matches the name argued, push the name of the customer who is friends with them
      })
    })
    return friendArray; // return the array of friends
  }

var topThreeTags = function(array) {
    let tagArray = []; // create a holder array for the tags
    array.forEach(function(customer) { // loop through the array of customers
      customer.tags.forEach(function(tag) { // loop through the tags array
        tagArray.push(tag); // push all customers tags to the holder array
      })
    })
    let counts = tagArray.reduce(function(acc, current) { // reduce the tag array into an object called counts
      acc[current] ? acc[current]++ : acc[current] = 1 // if the accumulator of the current element exists, or is 0, increment the value of the accumulator, otherwise set the value to one
      return acc // return the accumulated object of tags and their amounts
    }, {})
    let topsArray = Object.keys(counts).filter(function(key) { return counts[key] >= 3; }); // use Object.keys on our counts object object to turn it into an array and filter it to only keep the most common tags (those three or greater)
    return topsArray; // return the array of top tags
  }

var genderCount = function(array) {
    let allGens = []; // an array to hold all of the genders
    array.forEach(function(genders) { // loop through the customers array
      return genders.gender ? allGens.push(genders.gender) : null; // if there is a gender, push that gender to the allGens array
    })
    let genObj = allGens.reduce(function(acc, current) { // reduce the allGens array to an object
      acc[current] ? acc[current]++ || 0 : acc[current] = 1; // if the accumulator of the current element exists, or is 0, increment the value of the accumulator, otherwise set the value to one
      return acc; // return the accumulated object of genders and their amounts
    }, {})
    return genObj; // return the genders object
  }

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
