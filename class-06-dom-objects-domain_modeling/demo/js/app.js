'use strict';

var characters = [];
var characterListUlEl = document.getElementById('character-list');
var characterSectionEl = document.getElementById('character-section');

// names of characters:
//hermione, harry, dudley, snape, malfoy, diggory, doyle, mcGonagal

//house

//gender

//muggle/nonmuggle

//student/teacher

//age

//template

var objectName = {
  property: 'property',
  key: 'value'
};

var hermione = {
  name: 'hermione',
  house: 'griffindor',
  gender: 'female',
  muggle: false,
  student: true,
  teacher: false,
  age: Math.floor(Math.random() * 10 + 15),
  catchPhrase: 'its leviosa not leviosa',

  speak: function () {
    document.write(this.catchPhrase);
  },

  render: function () {
    var liEl = document.createElement('li');
    console.log(liEl.textContent);
    liEl.textContent = this.name;
    characterListUlEl.appendChild(liEl);
  },
  isCool: true,
};

var snape = {
  name: 'snape',
  friends: [hermione],
  house: 'slytherin',
  gender: 'male',
  muggle: false,
  student: false,
  teacher: true,
  age: Math.floor(Math.random() * 50 + 30),
  catchPhrase: 'potterrrrr!! 10 points from gryffindor!',

  speak: function () {
    document.write(this.catchPhrase);
  },


  isCool: false,
};

snape.render = function() {
  var liEl = document.createElement('li');
  console.log(liEl.textContent);
  liEl.textContent = this.name;
  characterListUlEl.appendChild(liEl);
},
snape.renderSection = function () {
  var h1El = document.createElement('h1');
  h1El.textContent = this.name;

  var ulEl = document.createElement('ul');

  for(var i in this.friends){
    var liEl = document.createElement('li');

    liEl.textContent = this.friends[i].name + ' : ' + this.friends[i].house ;

    ulEl.appendChild(liEl);
  }

  characterSectionEl.appendChild(h1El);
  characterSectionEl.appendChild(ulEl);
};

snape.isMean = false;

characters.push(hermione);

characters.push(snape);



