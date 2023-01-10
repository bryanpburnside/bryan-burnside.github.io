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

function search(aniArray, aniName) {
    for(var i = 0; i < aniArray.length; i++) {
        if(aniArray[i].name === aniName) {
            return aniArray[i];
        } else {
            return null;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(aniArray, aniName, aniReplacement) {
    for(var i = 0; i < aniArray.length; i++) {
        if(aniArray[i].name === aniName) {
            aniArray.splice(aniArray[i], 1, aniReplacement);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(aniArray, aniName) {
    for(var i = 0; i < aniArray.length; i++) {
        if(aniArray[i].name === aniName) {
            aniArray.splice(aniArray[i], 1);
        }
    }    
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(aniArray, aniObject) {
    for(var i = 0; i < aniArray.length; i++) {
        if(aniObject.name.length > 0 && aniObject.species.length > 0 && aniArray[i].name !== aniObject.name) {
            aniArray.push(aniObject);
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
