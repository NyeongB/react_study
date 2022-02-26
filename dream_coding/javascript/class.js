'use strict'

// Class: template
// ojbect: instance of a class
// JavaScript classes

// 1. Class declarations

class Person {
    // constructor
    constructor(name, age) {
        // feild

        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ccn = new Person('ccn', 30);
console.log(ccn.name);
console.log(ccn.age);

ccn.speak();

// Getter and Setters
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get age() {
        
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }

}

const user1 = new User('ccn', 1);

// Static properties and methods
class Article {
    static publisher = 'Dream Coding';
    constructor(articleName) {
        this.articleName = articleName
    };

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article('ccn');
console.log(Article.publisher)
console.log(article1.publisher)

// Inheritance

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`darwing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}


const triangle = new Triangle(20,20,'red');
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();