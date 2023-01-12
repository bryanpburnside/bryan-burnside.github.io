//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let array = []; // create an array variable to hold our object's values
    for(let key in object) { // loop through object
        array.push(object[key]); // push the values to our array
    }
    return array; // return the array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let array = []; // create an array variable to hold the key values
    for(let key in object) { // loop through object
        array.push(key); // push key values to object
    }
    let string = array.join(" "); // set a string variable equal to the array of keys joined as one string with spaces between each key
    return string; // return our string variable
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { 
    let array = []; // an array to collect the string values from the object
    for(let key in object) { // loop through the object
        if(typeof object[key] === 'string') // if the value is a string
        array.push(object[key]); // push that value to our array
    }
    let string = array.join(" "); // create a string variable that can be set to the array joined as a string
    return string; // return the string variable
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection) === true) { // if our collection is an array
        return 'array'; // return array
    } else { // otherwise
        return 'object'; // return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let modified = string[0].toUpperCase(); // set a variable to the first letter of the string we wish to modify and capitalize it
    for(var i = 1; i < string.length; i++) { // loop through the string, but set our index to 1, so we skip the initial letter
        modified += string[i]; // add the remaining letters of the string to our modified string
    }
    return modified; // return our modified string
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let array = string.split(" "); // create an array variable and set it to our string split at each space
    let modified = []; // create another array to take the modified string values
    for(let i = 0; i < array.length; i++) { // loop through the first array we created
        modified.push(array[i].charAt(0).toUpperCase() + array[i].slice(1)); // capitalize the first letter of each string and push it to our modified array
    }
    let restringed = modified.join(" "); // create a new string variable and set it to our modified array joined with a space
    return restringed; // return the new string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    for(let key in object) { // loop through the object
        if(key === "name") { // if a key in the object equals the string of name
            return "Welcome " + object[key].charAt(0).toUpperCase() + object[key].slice(1, object[key].length) + "!"; // return Welcome + the name key's value capitalized + !
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    for(let key in object) { // loop through the object
        if(object.name.length > 0 && object.species.length > 0) { // if the keys of name and species exist
            return object.name.charAt(0).toUpperCase() + object.name.slice(1, object.name.length) + " is a " + object.species.charAt(0).toUpperCase() + object.species.slice(1, object.species.length); // return their name capitalized + is a + their species capitalized
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(Array.isArray(object.noises) === false || object.noises <= 0) { // if object.noises is not an array OR is an empty array
        return 'there are no noises'; // return there are no noises
    } else { // otherwise
        let string = object.noises.join(' '); // set a string equal to the noises array strings joined by a space 
        return string; // return the string
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var check = ""; // a string to push the word from the string to if it matches the word
    var array = string.split(" "); // turning the string to an array to be looped through
    for(let i = 0; i < array.length; i++) { // looping through our string array
        if(array[i] === word) { // checking to see if any words in the array match the word
            check += array[i]; // and if so, adding them to the check string
        }
    }
    if(check === word) { // if the check string matches the word
        return true; // return true
    } else { // otherwise
        return false; // the word is not in the string, so return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {  // Should take a name and an object and add the name to the object's friends array then return the object
    object.friends.push(name); // add the name to the friend array in the object
    return object; // return the object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { // isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    var areTheyFriends = false; // check to see if the name is in the friends array is true or false
    if(Array.isArray(object.friends) === false) { // first an if-statement to rule out edge case objects with no friend's array
        return false; // return false if no array of friends
    } else { // otherwise
        for(let i = 0; i < object.friends.length; i++) { // loop through friends array
            if(object.friends[i] === name) { // if a friend's name matches the name argument
                areTheyFriends = true; // set areTheyFriends to true
            }
        }
    }    
    return areTheyFriends; // areTheyFriends will return false if no names match, and will return true if a friend's name does match
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { // Should take a name and a list of people, and return a list of all the names that <name> is not friends with
 var notFriends = []; // new array of non-friends
    for(let i = 0; i < array.length; i++) { // loop through array of people objects
        if(array[i].friends.includes(name) === false && array[i].name !== name) { // if the friends array of the person object does not include the name argument and the person object is not the name argument's person object
            notFriends.push(array[i].name); // push the name of the person not friends with the name to the notFriends array
        }
    }
    return notFriends; // return the notFriends array
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it
function updateObject(object, key, value) { 
        object[key] = value; // update value at key, or create key and set its value 
        return object // return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
    for(let key in object) { // loop through object
        for(let i = 0; i < array.length; i++) { //loop through array
            if(key === array[i]) { // if the key of the object matches an element of the array
                delete object[key]; // delete that object property
            }
        }
    }    
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { // Should take an array and return an array with all the duplicates removed
    let result = []; // create an empty array to hold unique array elements
    for(let i = 0; i < array.length; i++) { // loop through array
        isDuplicateFound = false; // this variable keeps track of duplicates
        for(let j = i + 1; j < array.length; j++) { // loop through array at the element next to the element at i
            if(array[j] === array[i]) { // if there is a duplicate
                isDuplicateFound = true; // break the inner loop
                break;
            }
        }
        if(isDuplicateFound) { // if a duplicate is found after inner loop breaks, continue with the next iteration of outer loop
            continue;
        }
        result.push(array[i]); // push current element to result array
    }
    return result; // return result array
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}