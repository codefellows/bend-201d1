'use strict';

//global variables

var username, correctGuesses;

var questionsArray = ['Does Alex also speak Spanish', 'Does Alex not have wonderful little boys?'];

var correctAnswerArray = [1, 0];

var possibleAnswerArray = [['no', 'n'], ['yes', 'y']];
var possibleIncorrectAnswerArray = [['yes', 'y'], ['no', 'n']];




function asksAllQuestions() {
  username = prompt('But to begin, what is your name?');
  correctGuesses = 0;

  for (var i = 0; i < questionsArray.length; i++) {
    var notAnswered = true;

    do {
      var answer = prompt(questionsArray[i]).toLowerCase();

      var currentCorrectAnswer = correctAnswerArray[i];


      if (answer === possibleAnswerArray[currentCorrectAnswer][0] ||
        answer === possibleAnswerArray[correctAnswerArray[i]][1]) {

        alert('Well done! You guessed correctly.');
        correctGuesses = (correctGuesses + 1);
        notAnswered = false;

      } else if (answer === possibleIncorrectAnswerArray[currentCorrectAnswer][0] ||
        answer === possibleIncorrectAnswerArray[currentCorrectAnswer][1]) {

        alert('thats not right');
        notAnswered = false;
      } else {
        alert('I am not a very smart program, please keep responses to yes/no or y/n.');
      }

    } while (notAnswered);

  }


}

asksAllQuestions();
// Actually, I learned to speak it in South America.'

//global variable for questions guessed correctly
;
function gameQuestions() {
  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();
  alert('Great job! You guessed ' + correctGuesses + ' out of 7 correctly!');
};

//This is my first question
function questionOne() {
  do {
    var language = prompt().toLowerCase();

  } while (true);
};

//checks if user prompt can get the y/n answer, but makes sure its y/n
function questionTwo() {
  var kids = prompt();
  kids = kids.toLowerCase();
  console.log('Does Alex have wonderful little boys?; ' + kids);
  if (kids === 'n' || kids === 'no') {
    alert('Well done! They are 3 and 7.');
    correctGuesses = (correctGuesses + 1);
  }
  else if (kids === 'n' || kids === 'no') {
    alert('Actually, he has two boys');
  }
  else {
    alert('I am not a very smart program, please keep responses to yes/no y/n.');
  };
};
// questionTwo();

//checks if user prompt can get the y/n answer, but makes sure its y/n
function questionThree() {
  var superPower = prompt('Does Alex have super powers?');
  superPower = superPower.toLowerCase();
  console.log('Does Alex have super powers?; ' + superPower);
  if (superPower === 'y' || superPower === 'yes') {
    alert('He does, his power is to get to a restaurant right before a big line starts');
    correctGuesses = (correctGuesses + 1);
  }
  else if (superPower === 'n' || superPower === 'no') {
    alert('Actually, his power is to get to a restaurant right before a big line starts');
  }
  else {
    alert('I am not a very smart program, please keep responses to yes/no y/n.');
  };
};
// questionThree();

//checks if user prompt can get the y/n answer, but makes sure its y/n
function questionFour() {
  var meatEater = prompt('Does Alex consume animal products?');
  meatEater = meatEater.toLowerCase();
  console.log('Does Alex consume animal products?; ' + meatEater);
  if (meatEater === 'y' || meatEater === 'yes') {
    alert('Well kinda, he does consume dairy, but he doesn\'t eat meat');
    correctGuesses = (correctGuesses + 1);
  }
  else if (meatEater === 'n' || meatEater === 'no') {
    alert('Sorry, he is not that hardcore, he just doesn\'t eat meat');
  }
  else {
    alert('I am not a very smart program, please keep responses to yes/no y/n.');
  };
};
// questionFour();

//checks if user prompt can get the y/n answer, but makes sure its y/n
function questionFive() {
  var lifeSaver = prompt('Has Alex saved the lives of hundreds?');
  lifeSaver = lifeSaver.toLowerCase();
  console.log('Has Alex saved lives?; ' + lifeSaver);
  if (lifeSaver === 'y' || lifeSaver === 'yes') {
    alert('Wow, you sure think highly of him. Maybe he has touched some hearts, but "saved hundreds of lives" is a tall order.');
  }
  else if (lifeSaver === 'n' || lifeSaver === 'no') {
    alert('You are clearly a realist.');
    correctGuesses = (correctGuesses + 1);
  }
  else {
    alert('I am not a very smart program, please keep responses to yes/no y/n.');
  };
};
// questionFive();


// create random number for question 6
function questionSix() {
  var myMin = 1;
  var myMax = 20;
  var randomNum = Math.random();
  var randomNumber = (Math.floor(randomNum * (myMax - myMin + 1)) + myMin);
  console.log(randomNumber);

  // Assign variables for 6th question
  var numberGuess;
  var guesses = 0;

  // This while loop checks if prompt value is my randomNumber
  while (guesses < 4) {
    numberGuess = prompt('Guess a number between 1 and 20. Hint: keep it to integers');
    console.log(numberGuess);

    if (numberGuess > randomNumber) {
      alert('Try something a little lower');
      console.log('Try something a little lower');
    } else if (numberGuess < randomNumber) {
      alert('Try something a little higher');
      console.log('Try something a little higher');

    } guesses++;
    console.log(guesses);

    if (guesses === 4) {
      alert('Sorry, you are out of guesses');
      console.log('Sorry, you are out of guesses');
    } else if (numberGuess == randomNumber) {
      alert('Nice, you guessed correctly');
      console.log('Nice, you guessed correctly');
      correctGuesses = (correctGuesses + 1);
      break;
    } else {
      alert('Why don\'t you give it another shot. You have ' + (4 - guesses) + ' left');
    }
  }
};
// questionSix();

// Assign variables for 7th question
function questionSeven() {
  var favAnimals = ['duck-billed platypus', 'lemur', 'raven', 'hydra', 'dog'];
  var aniGuesses = 0;
  var aniIdeas;
  var trueGuess = false;

  // This while loop checks if a prompted animal is in my array favAnimals
  while (aniGuesses < 6) {
    aniIdeas = prompt('Can you guess one of my favorite animals?');

    for (var i = 0; i < favAnimals.length; i++) {
      if (aniIdeas === favAnimals[i]) {
        trueGuess = true;
      }
    }

    if (trueGuess === true) {
      alert('Good guessing, you got it right!');
      correctGuesses = (correctGuesses + 1);
      break;
    }

    aniGuesses++;
    if (aniGuesses === 6) {
      alert('Sorry, you are out of guesses');
      break;
    }
    alert('Almost, why don\'t you try again. You have ' + (6 - aniGuesses) + ' guesses left');
  }
  //loops through favAnimals array to state the list of animals in a string
  var animals = 'my favorite animals are: ';
  for (var animal = 0; animal < favAnimals.length; animal++) {
    animals = (animals + favAnimals[animal] + ', ');
  }
  alert(animals);

  //Thanks for playing message
  alert('Thanks for playing. Hopefully, you have learned a little more about what makes Alex tick');
};
// questionSeven();


