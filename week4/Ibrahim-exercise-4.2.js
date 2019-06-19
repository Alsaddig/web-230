/*
============================================
; Title:  arrays.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 4.2"));
/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Apple
  Orange
  Banana
  Mango
  Pear
*/


// array of String values
const  fruits=["Apple", "Orange", "Banana ", "Mango ","Pear"];

// iterate over the array and output the results
console.log('\n')

for (let x = 0; x < fruits.length; x++) {
  console.log( fruits[x]);

}
