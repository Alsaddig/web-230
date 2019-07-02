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

console.log(header.display("Alsaddig", "Ibrahim", "Assignment 5.4"));
/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/
var famousComposers = [
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

  //Create a filtered list of composers by rating
  var comnposersByRating = famousComposers.map(function(composer) {
    var composerObject =
  {
    'lastName': composer.lastName,
    'Rating': composer.Rating,
  }
  return composerObject;

  });

  //Create a filtered list of composers by genre
  var composersByGenre = famousComposers.map(function(composer) {
    var composerObject = {
      'lastName': composer.lastName,
      'Genre': composer.Genre,
    }
    return composerObject;
  });

  //output
  console.log("\n-- COMPOSER BY RATING --");

  comnposersByRating.forEach(function(composer){

    console.log(" Rating: "+composer.Rating+"\nComposer: "+ composer.lastName+"\n");

  }


  );


  console.log("-- COMPOSER BY GENRE --");
  composersByGenre.forEach(function(composer){
       console.log(" Genre: "+composer.Genre+"\nComposer: "+ composer.lastName+"\n");

  }
  );
