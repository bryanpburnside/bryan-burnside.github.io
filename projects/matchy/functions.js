/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(aniArray, aniName) { // create a function with parameters to take animals array and animal name
    for(var i = 0; i < aniArray.length; i++) { // loop through the animals array
        if(aniArray[i].name === aniName) { // and if a name in the animals array matches the animal name
            return aniArray[i]; // return that animal's object
        }
    }
    return null; // we return null outside of the scope of the loop to break the loop
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(aniArray, aniName, aniReplacement) { // create a function with params of our animals array, an animal's name, and a replacement animal
    for(var i = 0; i < aniArray.length; i++) { // loop through the animals array
        if(aniArray[i].name === aniName) { // if an animal name in the animals array matches the animal name passed
            aniArray.splice(aniArray[i], 1, aniReplacement); // remove that animal's object and replace it with the replacement animal object
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(aniArray, aniName) { // create a function which takes the animal array and animal name
    for(var i = 0; i < aniArray.length; i++) { // loop through the animal object
        if(aniArray[i].name === aniName) { // if the name of an animal in the array matches the name of the animal passed 
            aniArray.splice(aniArray[i], 1); // remove that animal from the animal array
        }
    }    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(aniArray, aniObject) { // create a function that takes the animal array and an animal object
    var matchExists = false; // set a variable that will check if a match in animal names exists to false
    for(var i = 0; i < aniArray.length; i++) { // loop through the animal array
        if(aniArray[i].name === aniObject.name) { // if the animal name from the array matches an animal name from the new animal object 
            matchExists = true; // set matchExists to true, because a match exists
        }
        if(aniObject.name.length > 0 && aniObject.species.length > 0 && matchExists === false) { // if the new animal object's name and species length are greater than 0 AND the name of the animal in our array DOES NOT match the name of the animal in the object
            aniArray.push(aniObject); // add that animal object to the animal array
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
