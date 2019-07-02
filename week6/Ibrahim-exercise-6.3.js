/*
============================================
; Title:  Object.js
; Author: Alsaddig Ibrahim
; Date:  July 2 2019
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 6.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/
// object
const ticketing  = {
  id: 101,
  name: "Help Desk Support",
  requestor:"Bob Jones"
}

// output
console.log('\n{id:  ' + ticketing.id + ', name:  ' +ticketing.name+', requester: '+ticketing.requestor+ '}');

