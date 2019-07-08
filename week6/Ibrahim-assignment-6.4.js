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

console.log(header.display("Alsaddig", "Ibrahim", "Assignment 6.4"));



/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 6.4
  Today's Date

  Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
*/

// start program
 // ticket properties
var ticket = {
id: 105,
name:"was created on",
dateCreated:new Date().toLocaleDateString(),
priority:"gfg ",
personId:106
,
  person: {
    id:105,
      firstName:"Bob",
      lastName:"Jone",
      JobTitle:"Programmer I"
  }
};
console.log("\nTicket "+ticket.id+" was created on "+ticket.dateCreated+" and assigned to employee "+ticket.person.firstName+"  "
+ticket.person.lastName+"\n");

// end program
