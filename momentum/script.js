const player = {
    name: "nico",
    points: 10,
    fat: true,

};

console.log(player);
player.lastNmae = "potato";
player.points = 15;
console.log(player);

console.clear();

const calc = {
    add: (a, b) => {
        console.log(a + b);
    },
    sub: (a, b) => {
        console.log(a - b);
    },
    div: function(a, b) {
        console.log(a / b);
    },
    pow: function(a, b) {
        console.log(a**b);
    }
};

calc.add(1,5);
calc.sub(1,5);
calc.div(1,5);
calc.pow(2,5);

console.clear();

const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise");
} else if(age === 100) {
    console.log("You can do whatever you want.");
} else if(age > 80) {
    console.log("wow you are wise");
}