'use strict';

//STORE LOCATIONS TO BE USED
// var collegeAndPence = ('College and Pence', 8, 23, 65, 6.3);
// var chandlerAnd14th = ( 'Chandler and 14th', 3, 24, 1.4);
// var fresnoAnd14th = ('Fresno and 14th', , , );
// var minnesotaAndBond = ('Minnesota and Bond', , ,);
// var neNeffAndNEWilliamson = ('NE Neff and NE Willimson', , , );
//name, minCust, maxCust, avgSale
// var container = document.getElementById('store');
var storeTable = document.getElementById('store');
var storesArray = [];

var hours = ['6am: ', ' 7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '];
//CONSTRUCTOR FUNCTION FOR COOKIE SHOP
function SalmonCookies(location, hoursopen, min, max, avgSales) {
  this.location = location;
  this.hoursopen = hoursopen;
  this.min = min;
  this.max = max;
  this.avgSales = avgSales;
  this.cookiesEachHour = [];
  this.customersEachHour = [];
  this.totalSales = 0;
  storesArray.push(this);
};

new SalmonCookies('College and Pence', 8, 23, 65, 6.3);
new SalmonCookies('COCC', 10, 33, 45, 6.3);
new SalmonCookies('Seattle', 80, 230, 1, 1.2);
new SalmonCookies('New Mexico', 8, 230, 5, 7.8);


SalmonCookies.prototype.randomCust = function () {
  for (var i in hours) {
    var randomCust = Math.floor(Math.random() * (this.max - this.min) + this.min);
    this.customersEachHour[i] = randomCust;
  }
};

SalmonCookies.prototype.cookiesXcustomer = function () {
  this.randomCust();
  this.totalSales = 0;

  for (var i in hours) {
    this.cookiesEachHour[i] = Math.ceil(this.customersEachHour[i] * this.avgSales);

    this.totalSales += this.cookiesEachHour[i];
  }
};

SalmonCookies.prototype.render = function () {
  this.cookiesXcustomer();
  //placing random number into array for accessability later
  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);

  for(var i in this.cookiesEachHour){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  // tdEl = cookiesPerHr;
  // trEl.appendChild(tdEl);
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl);

};

for(var i in storesArray){
  storesArray[i].render();
}
// };
// SalmonCookies.renderAll = function () {
//
//   // tdEl =
// };
// SalmonCookies.prototype.render();



















// //calculating random customer number between min and max
// SalmonCookies.prototype.renderCookiesEachHour();

//DON'T MIND ALL THIS OLD CODE. DON'T MIND ALL THIS OLD CODE. DON'T MIND ALL THIS OLD CODE. DON'T MIND THIS OLD CODE
//I'm still using it.

// //FIRST LOCATION
// var collegeAndPence = {
//   name: 'College And Pence',
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// collegeAndPence.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

// //   };
// };
// // //assigns random cust number output  to cust per hour array
// collegeAndPence.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(collegeAndPence.custPerHour[i]);
//   }
// };
// //customer MULTIPLIED BY AVG cookies
// collegeAndPence.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
//rendering cookies per hour
// collegeAndPence.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();
//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies PER HOUR
//   liEl = document.createElement('li');
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   ulEl.appendChild(liEl);
// //ADDING NAME OF STREETS
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);

// };
// collegeAndPence.renderCookiesEachHour();

// //SECOND LOCATION
// var chandlerAnd14th = {
//   name: 'Chandler and 14th',
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.4,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// chandlerAnd14th.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// chandlerAnd14th.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// chandlerAnd14th.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// chandlerAnd14th.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// chandlerAnd14th.renderCookiesEachHour();

// //THIRD LOCATION
// var minnesotaAndBond = {
//   name: 'Minnesota and Bond',
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// minnesotaAndBond.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// minnesotaAndBond.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// minnesotaAndBond.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// minnesotaAndBond.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// minnesotaAndBond.renderCookiesEachHour();

// //FOURTH STORE
// var neNeffAndNEWilliamson = {
//   name: 'NE Neff and NE Williamson',
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   cookiesPerHr: [],
//   custPerHour: [],
//   totalCookiesInADay: 0,
// };
// // generates random customer number
// neNeffAndNEWilliamson.randomCust = function () {
//   for (var i in hours) {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);

//   };
// };


// // //assigns random cust number output  to cust per hour array
// neNeffAndNEWilliamson.customerPerHourArray = function () {
//   for (var i in hours) {
//     this.custPerHour[i] = (this.randomCust());
//     console.log(chandlerAnd14th.custPerHour[i]);
//   }
// };
// //customer times cookies
// neNeffAndNEWilliamson.cookiesXcustomer = function () {
//   this.customerPerHourArray();
//   this.totalCookiesInADay = 0;

//   for (var i in hours) {
//     this.cookiesPerHr[i] = Math.ceil(this.custPerHour[i] * this.avgSale);

//     this.totalCookiesInADay += this.cookiesPerHr[i];
//   }
// };
// //rendering cookies per hour
// neNeffAndNEWilliamson.renderCookiesEachHour = function () {
//   this.cookiesXcustomer();

//   var ulEl = document.createElement('ul');
//   for (var i in hours) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[i] + this.cookiesPerHr[i] + ' cookies';
//     ulEl.appendChild(liEl);
//   }
//   //total cookies and street names added
//   liEl.textContent = this.totalCookiesInADay + ' cookies total';
//   var h1 = document.createElement('H1');
//   h1.textContent = this.name;
//   container.appendChild(h1);
//   container.appendChild(ulEl);
// };
// neNeffAndNEWilliamson.renderCookiesEachHour();
