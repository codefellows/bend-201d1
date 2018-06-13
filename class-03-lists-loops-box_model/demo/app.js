'use strict';

alert('Welcome to my site,  lets play a guessing game about me.');

alert('these are yes and no questions, you must either answer y, yes, n, or no to continue');

var username = prompt('what is your name?');

var username = 'nicholas';

while(true) {

  var wereYouBorn = prompt('Was i born?');
  if(wereYouBorn === null) continue;
  wereYouBorn = wereYouBorn.toLowerCase();

  if (wereYouBorn === 'y' || wereYouBorn === 'yes') {
    alert(' of course I was');
    break;
  } else if (wereYouBorn === 'n' || wereYouBorn === 'no') {
    alert('how did you find out my secret');
    break;
  } else {
    alert('please answer yes or no');
  }
}

var favoriteFoods = ['yogurt', 'bananas', '!durian', 'pizza'];

for(var incrementor = 0; incrementor < favoriteFoods.length; incrementor++){
  console.log(favoriteFoods[incrementor]);
}

var counterForFoods = 0;

while(counterForFoods < 3){
  var foodGuess = prompt('what is one of my favorite foods');

  if(foodGuess === 'pizza'){
    alert('nice job');
    break;
  }

  counterForFoods++;
}




// we want to stop the while loop when they answer the question