// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

 // Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms){
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
    });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(onePepper => {
    if (state.greenPeppers){
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
    });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const oneSauce = document.querySelector('.sauce')
    if (state.whiteSauce){
      oneSauce.classList.add('sauce-white');
    } else {
      oneSauce.classList.remove('sauce-white');
    }
}


function renderGlutenFreeCrust() {
 const oneCrustGlutenFree = document.querySelector ('.crust') 
    if (state.glutenFreeCrust){
      oneCrustGlutenFree.classList.add('crust-gluten-free')
    } else {
      oneCrustGlutenFree.classList.remove('crust-gluten-free')
    }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`


if (state.pepperoni){
  document.querySelector('.btn.btn-pepperoni').classList.add('active')
}
else {
  document.querySelector('.btn.btn-pepperoni').classList.remove('active')
}
if (state.mushrooms){
  document.querySelector('.btn.btn-mushrooms').classList.add('active')
}
else {
  document.querySelector('.btn.btn-mushrooms').classList.remove('active')
}
if (state.greenPeppers){
  document.querySelector('.btn.btn-green-peppers').classList.add('active')
}
else {
  document.querySelector('.btn.btn-green-peppers').classList.remove('active')
}
if (state.whiteSauce){
  document.querySelector('.btn.btn-sauce').classList.add('active')
}
else {
  document.querySelector('.btn.btn-sauce').classList.remove('active')
}
if (state.glutenFreeCrust){
  document.querySelector('.btn.btn-crust').classList.add('active')
}
else {
  document.querySelector('.btn.btn-crust').classList.remove('active')
}
}




// function renderPrice() {
//   // Iteration 4: change the HTML of `<aside class="panel price">`
//   document.querySelectorAll('.panel-price').forEach(onePrice => {
//   if (state.active) {
//   price.style.visibility = 'visible';
//   } else { price.style.visibility = "hidden"
// });

// renderEverything();
//   }

// function renderPrice() {
//  const prices = document.querySelector('aside.panel.price') {
//    for (let key in ingredients)
//    if (state[key]) {

//       total += ingredients[key].price
//       state(key);
//    }
//  }

// Steps: 
// 1. List base price 
// 2. Add all ingredients selected
// 3. Sum the prices
// 4. Display all ingredients selected

// function renderPrice () {
// const $totalPrice = document.querySelector('aside ul')
// $totalPrice.innerHTML = ''
//   for (let ingredient in ingredients)
//     if (state[ingredient]) {
//       basePrice += ingredients[ingredient].price
//   $totalPrice.innerHTML += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name} </li> `
//     }
  
//   renderPrice();
// }


function renderPrice () {
document.querySelector('aside ul').innerHTML = ''
let list = ""
let $totalPrice = basePrice
  for (let ingredient in state)
    if (state[ingredient]) {
      $totalPrice += ingredients[ingredient].price
  list += `<li>$${ingredients[ingredient].price} ${ingredients[ingredient].name} </li> `
    }
  document.querySelector('aside ul').innerHTML = list
  document.querySelector('strong').innerHTML  = $totalPrice

    console.log($totalPrice);
  }
  renderPrice();
 
 
 



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});


// document.querySelector('.btn.btn-pepperoni').onclick = function () {
//   state.pepperoni = !state.pepperoni;
//   renderEverything();
// }


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">'

document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});