/*
============================================
; Title:  Exercise-7.2.js
; Author: Alsaddig Ibrahim
; Date:  July 10 2019
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 7.2"));


/*
  Expected output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
*/

// Functions:
function Employees(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Objects:


// Variables:
var employees = [
  new Employees(1,"Thomas","Edison","Software Engineer"),
  new Employees(2, "Benjamin", "Franklin", "Programmer"),
  new Employees(3,"Nikola","Tesla","Project Manager"),
  new Employees(4,"Charles","Babbage","Product Manager"),
  new Employees(5,"Alexander","Bell","Analyst")
];

// Output message:
employees.forEach(function(employees){
  console.log( employees.id + ", " + employees.firstName + "  " + employees.lastName + ", " + employees.title);
});

