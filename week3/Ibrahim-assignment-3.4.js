/*
;=============================================================
; Title:  Exercise 3.2
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/


//Start Coding
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 3.3"));

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 3.4
  Today's Date

  -- DO THE NUMBERS MATCH GAME --
  6 does not match 4!
  6 does not match 7!
  6 does not match 4!
  6 does not match 8!
  6 does not match 9!
  6 does not match 7!
  6 does match 6!
  6 does not match 3!
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
/**
 * Sends no match message to the console log
 *
 * @param {any}item1
 * @param {any} item2
 * @return {boolean} true /false
 */
//var item1, item2;

function match(item1, item2)
{
  if (item1 === item2){
    return true;
  }
  else
    return false;
}


/**
 * Sends no match message to the console log
 *
 * @param {any}item1
 * @param {any} item2
 * @return {boolean} true /false
 */
//var item1, item2;

function match(item1, item2)
{
  if (item1 === item2){
    return true;
  }
  else
    return false;
}



/**
 * Sends not match message to the console log
 *
 * @param {any}item1
 * @param {any} item2
 */
function logMismatch(item1, item2)
{
  console.log(item1+ '  and   '+item2+' do not match');
}

/**
 * Sends no match message to the console log
 *
 * @param {any}item1
 * @param {any} item2

 */
function logMatch(item1,item2){

  console.log(item1+ '  and   '+item2+' do match');
}


function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)

}

console.log('\n ');

console.log('-- DO THE NUMBERS MATCH GAME --  ');
var i=1;
var num=6
  for(i=1; i<=10; i++){
    var rand= randomNumber();
    if(match(num,rand)){
    logMatch(num,rand);
    }
    else
    {
      logMismatch(num,rand);
    }
  }
