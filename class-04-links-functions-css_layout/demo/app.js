'use strict';

var correctGuess = false;
var guessCounter = 4;
var favoriteFoods = ['pizza', 'durian', 'cookies', 'steak'];


// iterating with while loops and flags
while (guessCounter > 0 && !correctGuess) {
  guessCounter--;

  console.log(guessCounter);
  var favoriteFood = prompt('what food');

  for (var j = 0; j < favoriteFoods.length; j++) {
    if (favoriteFood === favoriteFoods[j]) {
      alert('good job');
      correctGuess = true;
    }
  }

  if (correctGuess === false) {
    alert('guess again');
  }
}

if (!correctGuess) {
  alert('no more guesses');
}

// same code, useing a for loop and breaks
for (var i = 0; i < 4; i++) {
  console.log(i);
  var favoriteFoodTwo = prompt('what food');

  for (var j = 0; j < favoriteFoods.length; j++) {
    if (favoriteFoodTwo === favoriteFoods[j]) {
      console.log('good job');
      correctGuess = true;
      break;
    }
  }

  if (correctGuess === true) {
    break;
  }
}

