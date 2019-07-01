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

/*
  Expected output:

  FirstName LastName
  Exercise 5.2
  Today's Date

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/
//Create a String array of your five (5) favorite food type
var food=["Oysters","Shrimp","Steak","Tacos" ,"Sushi"];

// forEach() function, iterate over the array and output the results
console.log("\n")
food.forEach(function(food){
  console.log(food)
}

);
