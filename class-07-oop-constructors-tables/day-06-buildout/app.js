'use strict';

var hourArray = ['6am', '7am', '8am'];
var storeContainer = document.getElementById('store-container');

//College and Pence Code Block

var collegeAndPence = {
  name: 'College and Pence',
  minCustomers: 23,
  maxCustomers: 65,
  averageSales: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalCookies: 0,

};

collegeAndPence.randomCustomersPerHour = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
};

collegeAndPence.calculateCustomersEachHour = function () {
  for(var i in hourArray){
    this.customersEachHour[i] = (this.randomCustomersPerHour());
  }
};

collegeAndPence.calculateCookiesEachHour = function () {
  this.calculateCustomersEachHour();
  this.totalCookies = 0;

  for(var i in hourArray) {
    this.cookiesEachHour[i] = Math.ceil(this.customersEachHour[i] * this.averageSales);
    this.totalCookies += this.cookiesEachHour[i];
  }
};

collegeAndPence.showOnHtmlCookiesEachHour = function() {
  this.calculateCookiesEachHour();

  var ulEl = document.createElement('ul'); //unordered list element
  for(var i = 0; i < hourArray.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = this.cookiesEachHour[i];
    ulEl.appendChild(liEl);
  }

  storeContainer.appendChild(ulEl);
};


// console.log(collegeAndPence.randomCustomersPerHour());

//End College And Pence Code Block