// 1. write an arrow function that accepts an array of numbers and returns the average of those numbers
let arrayAverage = (array) => {
    let total = 0;
    for(let i=0; i<array.length; i++) {
        total += array[i];
    }
    total = total/array.length;
    return total;
}

array = [1,2,3];
console.log(arrayAverage(array));

// 2. write an arrow function that takes a number and returns if it is even or not

let isEven = (n) => {
    if(n%2 == 0) {
        return true;
    } else {
        return false;
    }
}
let n=10;
console.log(isEven(n));

// 3.1 what is the output of the following code
// Output: undefined
// Explanation: When object.logMessage is passed to setTimeout, it loses its 'this' context.
// The function becomes a regular function call where 'this' refers to the global object, 
// not the 'object'. Therefore, this.message is undefined.
const object = {
    message: 'Hello, World',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// 3.2 corrected code to fix the 'this' context issue
// Using arrow function to preserve the 'this' context
// Arrow function calls object.logMessage() as a method, so 'this' refers to 'object'
// Output: "Hello, World"
setTimeout(() => object.logMessage(), 1000);

// 4 what is the output of the following code
// Output: undefined, undefined
// Explanation: 
// 1. When callback() is called inside object2.method(), it's a regular function call
// 2. In Node.js strict mode, 'this' in regular functions is undefined, so this.length = undefined
// 3. The method() function doesn't return anything, so console.log prints undefined
// Note: In browser global scope, first output would be 4 (this refers to window object)
let length = 4;
function callback() {
    console.log(this.length);
}
const object2 = {
    length: 5,
    method(callback) {
        callback(); // Regular function call - 'this' context is lost
    },
}
console.log(object2.method(callback,1,2)); // method() returns undefined