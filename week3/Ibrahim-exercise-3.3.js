/*
;=============================================================
; Title:  Exercise 3.2
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/

//start code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 3.3"));
/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13

switch (eventKeyCode) {
  case 13:
  console.log('The enter key was pressed.');
  break;
  case 16:
  console.log('The shift key was pressed.');
  break;
  case 32:
  console.log('The spacebar key was pressed.');
  break;
  case 8:
  console.log('The backspace / delete key was pressed.');
  break;
default:
  console.log('Unrecognized key.');
}
//End Code
