// write an arrow function that returns the square of a number 'n'
const square = (n) => {
    return n*n;
}
console.log(square(2));

// write a function that prints "Hello World" 5 times at an interval of 2 seconds
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("clear interval ran");
}, 11000);
