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
//Create a function called getFruit with one parameter (an array)
/**
 *Create a function called getFruit with one parameter (an array)
 *  @param values;
 */


function getFruit(values){
  for (let x = 0; x < values.length; x++) {
    console.log( values[x]);

  }

}

// iterate over the array and output the results
console.log('\n')


getFruit(fruits);


