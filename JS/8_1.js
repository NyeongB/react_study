const fruits = document.querySelectorAll('.fruits p');


const fruitArray = Array.from(fruits);

console.log(fruitArray);

const fruitsNames = fruitArray.map(fruit => fruit.textContent);

console.log(fruitsNames);