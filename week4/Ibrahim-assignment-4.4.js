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
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/
//Create a one-dimensional 5 element array
var states = [" Alabama","Nebraska","Iowa","California","Nevada"];

//Create a function called get_value() that accepts two arguments: an array index
/**
 *
 * @param {array} arr
 * @param {string} val
 */
    function get_Value(arr,val){
      for(let i=0;i<arr.length;i++){
        if (predicate(arr[i],val))
        console.log(arr[i]);

      }
      }


  /**
 * Compares the first letters of two values
 *
 * @param {string} value1
 * @param {string} value2
 *
 * @returns {bool} true / false
 */
function predicate(value1, value2) {
  return (value1[0].toLowerCase() == value2[0].toLowerCase()) ? true : false;
}

/**
 *
 *
 *@param {array} items;
 */
function printItem(items){
  for(let i=0;i<items.length;i++){
    console.log(items[i]);

 }
}
  //output
  console.log("\n-- ORIGINAL ARRAY --");

   printItem(states);



  //sort
  console.log("\n-- SORTED ARRAY --");
  printItem(states.sort());

  //print item start with letter i
  console.log("\n-- SELECTED VALUE --");
  get_Value(states,'c');
