// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // function to create contact
    return { // returns a contact object
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() { // factory function to find how many contacts are in the contacts array
            return contacts.length; // returns the length of the contacts array
        },
        addContact: function(contact) { // factory function to add a contact
            contacts.push(contact); // pushes contact into the contacts array
        },
        findContact: function(fullName) { // factory function which takes a full name string
            for(let i = 0; i < contacts.length; i++) { // loops through the contacts array
                if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) { // if the contacts first and last name with a space in the middle equals fullName
                    return contacts[i]; // return the contact
                } else { // otherwise
                    return undefined; // returns undefined
                }
            }
        },
        removeContact: function(contact) { // factory function which takes a contact object
            for(let i = 0; i < contacts.length; i++) { // loops through contacts array
                if(contacts[i] === contact) { // if that contact exists
                    contacts.splice(contacts[i], 1); // delete the contact from the contacts array
                }
            }
        },
        printAllContactNames: function() { // factory function to print all contact names
            let collection = []; // array to hold all first and last names
            for(let i = 0; i < contacts.length; i++) { // loops through the contacts array
                collection.push(contacts[i].nameFirst + " " + contacts[i].nameLast); // pushing all first and last names to collection array
            }
            const joined = collection.join("\n"); // variable to contain the joined string of the collection array separated with line breaks
            return joined; // returning of the contact list string
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
