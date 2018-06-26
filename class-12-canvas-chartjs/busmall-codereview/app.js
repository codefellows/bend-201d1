'use strict';
//variables
Product.productsArray = [];
//Product.timesShown = [];
//Product.rankProduct = [];
var product1 = document.getElementById('product1');
var prodName1 = document.getElementById('product1-name');
var product2 = document.getElementById('product2');
var prodName2 = document.getElementById('product2-name');
var product3 = document.getElementById('product3');
var prodName3 = document.getElementById('product3-name');
var section = document.getElementById('clickMe');

//function for photos to choose from
function Product(src, name, size) {
  this.src = src;
  this.name = name;
  this.size = size || '100px';
  this.vote = 0;
  this.timesShown = 0;
  Product.productsArray.push(this);
  // Product.rankProduct.push(this);
  //Product.timesShown.push(this);
};

Product.voteCount = 0;


//Function for ranks for photos
Product.rankProduct = function () {
  for (var i in Product.productsArray) {
  }
};

//do while loops for random numbers for photos to change
Product.random = function () {
  var randomNumber1 = 0;
  do {
    randomNumber1 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === pastRandomNumber1 || randomNumber1 === pastRandomNumber2 || randomNumber1 === pastRandomNumber3);

  var randomNumber2 = 0;
  do {
    randomNumber2 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === randomNumber2 || randomNumber2 === pastRandomNumber1 || randomNumber2 === pastRandomNumber2 || randomNumber2 === pastRandomNumber3);
  
  var randomNumber3 = 0;
  do {
    randomNumber3 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2 || randomNumber3 === pastRandomNumber1 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);

  product1.src = Product.productsArray[randomNumber1].src;
  product2.src = Product.productsArray[randomNumber2].src;
  product3.src = Product.productsArray[randomNumber3].src;

  Product.productsArray[randomNumber1].timesShown++;
  Product.productsArray[randomNumber2].timesShown++;
  Product.productsArray[randomNumber3].timesShown++;

  prodName1.innerText = Product.productsArray[randomNumber1].name;
  prodName2.innerText = Product.productsArray[randomNumber2].name;
  prodName3.innerText = Product.productsArray[randomNumber3].name;

  product1.dataset.index = randomNumber1;
  product2.dataset.index = randomNumber2;
  product3.dataset.index = randomNumber3;

  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;
};

var pastRandomNumber1 = 0;
var pastRandomNumber2 = 1;
var pastRandomNumber3 = 2;

new Product('./photos/bag.jpg', 'Bag', '100px');
new Product('./photos/bathroom.jpg', 'Bathroom', '100px');
new Product('./photos/banana.jpg', 'Banana', '100px');
new Product('./photos/boots.jpg', 'Boots', '100px');
new Product('./photos/breakfast.jpg', 'Breakfast', '100px');
new Product('./photos/bubblegum.jpg', 'Bubble Gum', '100px');

Product.random();

function handleClickEvent(event){
  //console.log(event);
  var clickedNode = event.target;
  console.log(clickedNode);

  event.preventDefault();

  // Number of votes registered by the user
  Product.voteCount++;
  // Increment number of votes for product selected
  Product.productsArray[clickedNode.dataset.index].vote++;

  if(Product.voteCount === 5){
    section.removeEventListener('click', handleClickEvent);
  }

  Product.random();
}

section.addEventListener('click', handleClickEvent);