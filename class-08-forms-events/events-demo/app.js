'use strict';

// Element List/ global variables
// counters
var clickedOnceCount = 0,
  dontClickCount = 0,
  doubleClickCount = 0,
  mouseOverCount = 0,
  notSuspicousCount = 0,
  mouseUpCount = 0;

var clickOnce = document.getElementById('click-once');
var dontClick = document.getElementById('demi');
var doubleClick = document.getElementById('adam');
var mouseOver = document.getElementById('tim');
var notSuspicous = document.getElementById('not-suspicious');


// Section for Listeners
var nicholas = 'nicholas';

clickOnce.addEventListener('mouseup', function(event){
  console.log(event);
  mouseUpCount++;

  clickOnce.textContent = 'Don\'t ever let me go!';

});

dontClick.addEventListener('click', dontClickHandler);

notSuspicous.addEventListener('mouseover', notSuspicousHandler);
clickOnce.addEventListener('mouseover', notSuspicousHandler);
dontClick.addEventListener('mouseover', notSuspicousHandler);
mouseOver.addEventListener('mouseover', notSuspicousHandler);
doubleClick.addEventListener('mouseover', notSuspicousHandler);




// Section for Handlers
function dontClickHandler(){
  dontClickCount++;

  alert('Your system has been compromised--- click here to fix!');
};

function notSuspicousHandler(event) {

  notSuspicousCount++;
  var colors = ['red', 'yellow', 'blue', 'green', 'purple', 'pink'];
  var randomNum = Math.floor(Math.random() * 6 );
  event.target.className = colors[randomNum];
}





//Section for Helpers