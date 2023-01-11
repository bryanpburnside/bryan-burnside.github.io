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

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

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