// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tory',
    color: 'white',
    size: null,
    birthData: new Date(),
    //symbol: Symbol('sm'),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); // 일부만 변환하겠다
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key ${key}, value: ${value}`);
    return value;
});

console.log(json);


// 2. JSON to Object
// perse(json)
console.clear();

json = JSON.stringify(rabbit);

const obj = JSON.parse(json); // 함수가 사라졌음
console.log(obj);

console.log(rabbit.birthData.getDate());
console.log(obj.birthData);