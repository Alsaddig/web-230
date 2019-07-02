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

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 6.2"));

/*
  Expected output:

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/
try {
  // variables
  let x = a
  let y = 1
  const sum = y / x

  // if statement
  if (sum === Infinity) throw 'DivideByZeroException'

  // output
  console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
