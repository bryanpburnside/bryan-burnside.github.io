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
   return _.filter(array, customer => customer.gender === 'male').length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(accumulator, current) {
        return current.gender === 'female' ? accumulator += 1 : accumulator;
   }, 0);
   return females;
}

var oldestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) {
        if(accumulator.age < current.age) {
            return current;
        } else {
            return accumulator;
        }
    }).name
    
}

var youngestCustomer = function(array) {
    return _.reduce(array, function(accumulator, current) {
        if(accumulator.age > current.age) {
            return current;
        } else {
            return accumulator;
        }
    }).name
    
}

var averageBalance = function(array) {
    let modified = array.map(function(customer) {
        return customer.balance.slice(1, 2) + customer.balance.slice(3);
    })
    let balances = modified.reduce(function(accumulator, current) {
        return parseFloat(accumulator) + parseFloat(current);
    }, 0)
    return balances / modified.length;
}

var firstLetterCount = function(array, letter) {
  let tester = _.filter(array, function(customer) {
       return customer.name.startsWith(letter.toUpperCase());
    });
    return tester.length;
}

var friendFirstLetterCount = function(array, customer, letter) {
    // array.forEach(function(customer){

    // })
    // let tester = _.filter(array, function(customer, i) {
    //     return customer.name = customer && customer.friends[i].startsWith(letter.toUpperCase())
    //  });
    //  return tester.length;
}

var friendsCount;

var topThreeTags;

var genderCount;

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
