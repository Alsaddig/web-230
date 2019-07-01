/*
============================================
; Title:  arrays.js
; Author: Alsaddig Ibrahim
; Date:   June 30 2019
; Description: Demonstrates how to define and output array values
;===========================================
*/

// Start Code
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 5.3"));
/*
  Expected output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/
var composers = [

  {

  firstName: "john",
  lastName: "Beethoven",
  Genre:"Classical",
  Rating:8


  },

  {

  firstName: "William",
  lastName: "Mozart",
   Genre:"Classical",
  Rating:10
  },

  {

  firstName: "Percy",
  lastName: "Bach",
  Genre:"Classical",
  Rating:9

  },

  {

  firstName: "Robert",
  lastName: "Haydn",
  Genre:"Classical",
  Rating:6

  },

  {

  firstName: "Maya",
  lastName: "Schubert",
  Genre:"Classical",
  Rating:5
  }

  ];

  composers.forEach(function(composers){
    console.log("Last Name: "+ composers.lastName+" Genre: "+composers.Genre+" Rating: "+composers.Rating)
  }


  );
