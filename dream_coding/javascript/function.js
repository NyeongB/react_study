//Function
// one function === one thing
// naming: doSomthing, command, verb

function printHello() {
    console.log('Hello');
};

printHello();


function log(message) {
    console.log(message);
};

log('Hello@'); 

// 2. Parameters

function changeName(obj) {
    obj.name = 'coder';
};

const ccn = { name: 'ccn' };

log(ccn.name);
changeName(ccn);
log(ccn.name);

// 3. Default parameters 

function showMessage(message, from='unknown') {
    log(`${message} by ${from}`);
};

showMessage('Hi!');

// 4. Rest parameters
function printAll(...args) {
    for (const arg of args) {
        log(arg);
    }
}

printAll('dream', 'coding', 'ellie');

// Arrow Function

const simplePrint = () => {log('simplePrint');}
simplePrint();

// IIFE: Immediately Invoked Function Expression

(function hello() {
    console.log('IIFE');
})();

