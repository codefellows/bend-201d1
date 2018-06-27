'use strict';

var iceCreamButton = document.getElementById('increment');

// Constrcutor Function
function IceCream(flavor){
  this.flavor = flavor;
  this.scoopsServedPerDay = Math.floor(Math.random() * 7);
  IceCream.all.push(this);
}

IceCream.all = [];

new IceCream('vanilla');
new IceCream('coffee');
new IceCream('mint Chip');
new IceCream('bubble gum');
new IceCream('moose tracks');
new IceCream('strawberry');
new IceCream('cookie dough');



// Chart stuff

var ctx = document.getElementById('ice-cream-chart').getContext('2d');

var iceCreamData = {
  labels: [],
  datasets: [{
    label: 'Favorite Ice Creams',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [],
  }]
};

function generateIceCreamData () { // this is the function to generate ice cream data
  for(var i in IceCream.all){
    _generateIceCreamData(i); //it applies logic using a helper function of the same name with an added _
    //you can find this function right below
  }
}

function _generateIceCreamData(i) {
  iceCreamData.labels[i] = IceCream.all[i].flavor;
  iceCreamData.datasets['0']['data'][i] = IceCream.all[i].scoopsServedPerDay;
}




var iceCreamChart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: iceCreamData,

  // Configuration options go here
  options: {}
});

// Button Logic

iceCreamButton.addEventListener('click', iceCreamButtonHandler);

function iceCreamButtonHandler(){
  var randomIceCreamIndex = Math.floor(Math.random() * IceCream.all.length); //picks a random index

  IceCream.all[randomIceCreamIndex].scoopsServedPerDay++; //increments that index's value by one

  generateIceCreamData();
  iceCreamChart.update();
}
//
_generateIceCreamData();

