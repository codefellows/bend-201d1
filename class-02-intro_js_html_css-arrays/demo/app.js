'use strict';

var userName = prompt('what is your name');

alert('hello person of interest, ' + userName);

var howOld = prompt('how old is nicholas');

if(howOld < 50) {
  alert('you did so well ' + userName + ' you got pretty close');
} else {
  alert('that is way too old');
}

var hairIsBrown = prompt('is my hair brown');

if(hairIsBrown === 'yes' || hairIsBrown === 'Yes' || hairIsBrown === 'Y' || hairIsBrown === 'y'){
  alert('yep, my hair is brown');
} else {
  alert('nope');
}




