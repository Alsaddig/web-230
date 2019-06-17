/*
;=============================================================
; Title:  Exercise 3.2
; Author: Alsaddig Ibrahim
; Date:   June 16 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/

/*
Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date
*/
//import { display } from '../Ibrahim-header.js';
//code star
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Exercise 3.2"));

/*


  // output from the match() function
  false
  true
*/
/**
 * Sends no match message to the console log
 *
 * @param {any}value1
 * @param {any} value2
 * @return {boolean} true /false
 */
//var item1, item2;

function match(value1, value2)
{
  if (value1 === value2){
    return true;
  }
  else
    return false;
}



/*
  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/
/**
 * Sends not match message to the console log
 *
 * @param {any}value1
 * @param {any} value2
 */
function logMismatch(value1, value2)
{
  console.log(value1+ '  and'+value2+' do not match');
}

/**
 * Sends no match message to the console log
 *
 * @param {any}value1
 * @param {any} value2

 */
function logMatch(value1,value2){

  console.log(value1+ '  and'+value2+' do match');
}

var item1=" Truck";
var item2=" Car";
var item3=' Bike';
var item4=' Bike';
var item5=' Four';
var item6=' Three';
//first test
if(match(item1,item2)){
  logMatch(item1,item2);
}
else{
  logMismatch(item1,item2);
}


//second test
if(match(item3,item4)){
  logMatch(item3,item4);
}
else{
  logMismatch(item3,item4);
}


//three test
if(match(item5,item6)){
  logMatch(item5,item6);
}
else{
  logMismatch(item5,item6);
}

//code end
