// Object
// object = { key: value };
const ccn = {
    name: 'ccn',
    age: 30,
};


function print(person) {
    console.log(`name is ${person.name}, age is ${person.age}`);
}

print(ccn);


const obj1 = {}; // literal
const obj2 = new Object(); // constructor


// 뒤늦게 추가
ccn.hasJob = true;
console.log(ccn.hasJob);
// 가능하면 피해서 코딩하는게 좋긴함

// 프리퍼티 삭제하는것도 가능
delete ccn.hasJob;

// 2.Computed properties

console.log(ccn.name);
console.log(ccn['name']); // 키는 스트링 타입으로
ccn['hasJob'] = true;
console.log(ccn.hasJob);

// 코딩할때는 그냥 dot을 쓰는게 맞음

// 이럴때는 쓴다
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ccn, 'name');
printValue(ccn, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = {name: 'elile', age: 30};
console.log(person4);

// 4. Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operato: property existence check (key in obj)

console.log('name' in ccn);

// 6. for..in vs for..of
// for (key in obj)

console.clear();
for (key in ccn) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for(let i = 0; i< array.length; i++){
    console.log(array[i]);
}

for(value of array) {
    console.log(value);
}

// 7. Fun cloning

const ccn2 = Object.assign({}, ccn);
console.log(ccn2);
ccn2.name='ccn2';

console.log(ccn);
console.log(ccn2);