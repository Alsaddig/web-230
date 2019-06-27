/*
============================================
; Title:  arrays.js
; Author: Alsaddig Ibrahim
; Date:   June 19 2019
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 4.4"));

//Multiply every element in the array with 10
var numbers = [65, 44, 12, 4,];
var array1 = numbers.map(myFunction)

function myFunction('num') {
  return num * 10;
}
console.log(array1[1]);
