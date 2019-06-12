/*
;=============================================================
; Title:  Exercise 2.3
; Author: Alsaddig Ibrahim
; Date:   9 June 2019
; Description: Displays a formatted FirstName LastName
/*
=============================================================

  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/
//Start coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Week2 Function properties"));


//Create a function property

myName.Alsaddig = "Alsaddig";
myName.Ibrahim = "Ibrahim";

//function
 function myName()
 {
	return myName.Alsaddig+'   '+myName.Ibrahim;
 }

 //print output

 console.log('\n'+'Hello  '+myName());

 //end coding
