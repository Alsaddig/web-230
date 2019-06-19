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
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/
//start coding

//Create a string array of 5 vehicles
var vehicles= ["Car","Truck","Motorcycle","Airplane","Bus"];

//Create a function called getValue with two parameters
  function getValue(arr,val){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===val)
    console.log(arr[i]);

  }

  }

  //output
  console.log("\n-- DISPLAYING ARRAY ITEMS --");
  for(let i=0;i<vehicles.length;i++){
    console.log(vehicles[i]);

  }

  console.log("\n-- SELECTED VALUE --");
  getValue(vehicles,"Motorcycle");

  console.log("\n-- SELECTED VALUE --");
  getValue(vehicles,"Bus");
