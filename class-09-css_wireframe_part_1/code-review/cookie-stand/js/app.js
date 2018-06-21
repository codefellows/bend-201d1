'use strict';
//create global variables
var storeTable = document.getElementById('store-table');
var hourArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm'];
var storeArray = [];

//create constructor function Stores
function Store(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  //push new store into array
  storeArray.push(this);
}
// console.log(storeArray);
//create Store Instances
new Store ('College and Pence', 23, 65, 6.3);
new Store ('Chandler and 14th', 3, 24, 1.2);
new Store ('Fresno and 14th', 11, 38, 3.7);
new Store ('Minnesota and Bond', 20, 38, 2.3);
new Store ('NE Neff and NE Williamson', 2, 16, 4.6);

Store.prototype.randomCust = function () {
  for(var i in hourArray){
    var randomCust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.customersPerHour[i] = randomCust;
  }
};

Store.prototype.calculateCookiesPerHour = function (){
  this.randomCust();
  this.totalCookies = 0;

  for (var i in hourArray) {
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale);
    this.totalCookies += this.cookiesPerHour[i];
  }

};
//create header row with hoursArray - need loop
var makeHeaderRow = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Locations';
  trEl.appendChild(thEl);
  console.log(trEl);
  for(var i in hourArray) {
    // trEl = document.createElement('tr');
    thEl = document.createElement('th');
    thEl.textContent = hourArray[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
};
//create table
Store.prototype.render = function(){
  this.calculateCookiesPerHour();
  //create tr
  var trEl = document.createElement('tr');
  //create td
  var tdEl = document.createElement('td');
  //create content (store name)
  tdEl.textContent = this.name;
  //append the TD to the TR
  trEl.appendChild(tdEl);
  //create for loop with array cookies per hour
  for(var i in this.cookiesPerHour){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
  //render store array
};

function renderAllStores() {
  storeTable.innerHTML = '';

  makeHeaderRow();

  for(var i in storeArray) {
    storeArray[i].render();
  }

  makeFooter();
}

renderAllStores();

//footer total row
function makeFooter() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent = 'Title';

  for(var i in hourArray){ //iterates slowly
    var tdEl = document.createElement('td');
    var totalHourly = 0;

    for (var j in storeArray){ // iterates quickly
      // console.log(storeArray[j].name + ' cookie: ' + storeArray[j].cookiesPerHour[i]);
      totalHourly += storeArray[j].cookiesPerHour[i];
    }

    tdEl.textContent = totalHourly;
    trEl.appendChild(tdEl);
    // console.log('==================hourly total ' + totalHourly + '===============');

  }
  storeTable.appendChild(trEl);

}

// tdEl = document.createElement('td');
// tdEl.textContent = this.totalCookies;
// trEl.appendChild(tdEl);
// storeTable.appendChild(tdEl);

//create form//
//create globa variables


// function formSubmit(event) {
//   event.preventDefault();
//   // console.log('submit button clicked');
//   if (!event.target.name.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookiePerSale.value ) {
//     return alert('Fields cannot be empty!');
// }

//event handler function
function handlerFormSubmit(event) {
  event.preventDefault();

  var exists = checkIfExistsAndUpdate(event);

  if (!event.target.name.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCookiePerSale){
    return alert ('Fields may not be empty');
  }

  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookiePerSale = parseFloat(event.target.avgCookiePerSale.value);

  event.target.name.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookiePerSale.value = null;

  if(!exists) {
    new Store(name, minCust, maxCust, avgCookiePerSale);
  }
  renderAllStores();
}

var storeForm = document.getElementById('add-location');
storeForm.addEventListener('submit', handlerFormSubmit);


// empties the form after comments are read
//

function checkIfExistsAndUpdate(event){

  for(var i = 0; i < storeArray.length; i++){
    if(event.target.name.value.toLowerCase() === storeArray[i].name.toLowerCase()){

      storeArray[i].minCust = parseInt(event.target.minCust.value);
      storeArray[i].maxCust = parseInt(event.target.maxCust.value);
      storeArray[i].avgCookiePerSale = parseFloat(event.target.avgCookiePerSale.value);

      return true;
    }
  }
  return false;

}





// console.log('log of the event object', event);
// console.log('log of the event.target', event.target);
// console.log('log of the event.target.name', event.target.name.value);
// console.log(event.target.minCust.value);




// var storeForm = document.getElementbyId ('store-form');
//event listender form submit//


// //event listender form submit//
// storeForm.addEventListener('submit', handleFormSubmit);