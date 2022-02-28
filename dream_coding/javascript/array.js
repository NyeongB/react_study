'use strict';

// Array

// 1. Declaration

const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

// 3. Looping over an array
// print all fruits

for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach

fruits.forEach(function(fruit) {
    console.log(fruit+" for");
})

fruits.forEach((fruit,index) => console.log(fruit +' forEach '+index));

// 4.Addtion, deletion, copy
// push: add an item to the end
fruits.push('straw', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to th benigging
fruits.unshift('straw', 'peach');
console.log(fruits);
// shift: remove an item from the benigging
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('straw', 'peach', 'lemon');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('water'));
console.log(fruits.indexOf('water'));