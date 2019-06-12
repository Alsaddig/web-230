/*
;=============================================================
; Title:  Exercise 2.3
; Author: Alsaddig Ibrahim
; Date:   9 June 2019
; Description: Displays a formatted FirstName LastName
===============================================================

*/

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 2.4
  Today's Date

  Hello my name is <your actual name goes here>!

  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.

  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.

*/
const header = require('../Ibrahim-header.js');

console.log(header.display("Alsaddig", "Ibrahim", "Week2 Exercise 2.4"));

/**
 *Create a function called "full_name" that accepts two parameters (first and last name) as arguments and returns the two values as a concatenated string
 * @param {firstName}
 * @param {lastName}
 * @return Concatenated string using the two values surrounding a space character
*/

function fullName(firstName, lastName) {
 return firstName + ' ' + lastName;
}

/**
 * Create a function called "date_writer" that accepts three parameters (year, month, and day) as arguments and returns a fully qualified JavaScript date object.
 *
 * @param {int} year
 * @param {month} month
 * @param {day} day
 * @returns {object}
 */
function dateWriter(year, month, day) {
  return new Date(year, --month, day);
}
/**
 * Create a function called "format_number" that accepts two parameters (number and fixed position) as arguments and returns the formatted value.
 *
 * @param {double} value
 * @param {int} fixedPosition
 * @returns {double}
 */
function formatNumber(value, fixedPosition) {
  return value.toFixed(fixedPosition);
}
/**
 * Returns the value as a parsed integer
 *
 * @param {string} value
 * @returns {int}
 */
function convertToInt(value) {
  return parseInt(value);
}
/**
 * Returns the value as a parsed float
 *
 * @param {string} value
 * @returns {float}
 */
function convertToFloat(value) {
  return parseFloat(value);
}
// Variables
var date = dateWriter(2019,6,9);
var temperature = formatNumber(33.6, 1);
var age = '37';
var savings = '1000000';

// Output -see Expected output: above
console.log('\n');
console.log('Hello my name is ' + fullName('Alsaddig', 'Ibrahim') + '!');
console.log('\n');
console.log('Today\'s date is ' + date.toLocaleDateString('en-US') + ' and the current temperature is ' + temperature + ' degrees.');
console.log('\n');
console.log('I am ' + convertToInt(age) + ' years old and my savings account goal is ' + formatNumber(convertToFloat(savings), 2) + ' dollars.');

// End program

