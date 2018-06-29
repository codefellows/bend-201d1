'use strict';

Product.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

Product.all = [];
Product.container = document.getElementById('image_container');
Product.viewed = [];
Product.labels = [];
Product.pics = [document.getElementById('left'),
                document.getElementById('center'),
                document.getElementById('right')];
Product.list = document.getElementById('productlist');
Product.totalClicks = 0;
Product.views = [];
Product.votes = [];

function Product(name) {
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Product.all.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * Product.names.length);
}

function displayPics(){
  // roll for three random indexes
  while(Product.viewed.length < 6){
    var rando = makeRandom();
    while(!Product.viewed.includes(rando)){
      Product.viewed.push(rando);
    }
  }
  console.log(Product.viewed)

  // To the DOM and beyond!
  for (var i = 0; i < 3; i++){
    var temp = Product.viewed.shift();
    Product.pics[i].src = Product.all[temp].path;
    Product.pics[i].id = Product.all[temp].name;
    Product.all[temp].views += 1;
  }
}

function handleClick(event) {
  // console.log(Product.totalClicks, 'total clicks');
  if(Product.totalClicks > 24) {
    Product.container.removeEventListener('click', handleClick);
    Product.container.style.display = 'none';
    // showList();
    makeChart();
  }
  if (event.target.id === 'image_container') {
    return alert('Click on an image, dumbass!');
  }
  Product.totalClicks += 1;
  for(var i = 0; i < Product.names.length; i++){
    if(event.target.id === Product.all[i].name) {
      Product.all[i].votes += 1;
      // console.log(event.target.id + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views');
    }
  }
  localStorage.busmall = JSON.stringify(Product.all);
  displayPics();
}

function showList() {
  for(var i = 0; i < Product.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Product.all[i].name + ' has ' + Product.all[i].votes + ' votes in ' + Product.all[i].views + ' views';
    Product.list.appendChild(liEl);
  }
}

function makeChartData(){
  Product.all.forEach(function(product){
    Product.labels.push(product.name);
    Product.votes.push(product.votes);
    Product.views.push(product.views);
  })
}

function makeChart(){
  makeChartData();
  var ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Product.labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: Product.votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee';
}

Product.container.addEventListener('click', handleClick);
document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Your local storage done got cleared!');
})

if(localStorage.busmall){
  console.log('Local storage data exists');
  Product.all = JSON.parse(localStorage.busmall)
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(var i = 0; i < Product.names.length; i++) {
    new Product(Product.names[i]);
  }
  console.log(Product.all);
}

displayPics();
