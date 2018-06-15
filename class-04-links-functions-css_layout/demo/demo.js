'use strict';

var clickButton = document.getElementById('clickMe');
// console.log(clickButton);

clickButton.addEventListener('click', function() {
  console.log('you clicked me');
});

// function syntax

var nicholasName = (function(name){
  return name;
})('nicholas');



function functionName (paramater1, parameter2){
  return paramater1 + parameter2;
}


function calculateArea (width, height) {
  var area = width * height;
  return area;
}

// console.log(calculateArea(8, 10));
// calculateArea(9, 9);

function circleProperties (radius){
  var diameter = radius * 2;
  var area = radius * radius * Math.PI;

  return [diameter, area];
}

var x = circleProperties(80);
console.log(x);

// console.log(circleProperties(4));