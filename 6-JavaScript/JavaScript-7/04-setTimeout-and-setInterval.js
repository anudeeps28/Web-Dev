// This runs immediately
console.log("Hi There!");

// setTimeout: executes code once after a delay
// Waits 4000ms (4 seconds) then executes the callback function
setTimeout(() => {
    console.log("Apna College");
}, 4000);

// These run immediately (synchronous code)
console.log("Welcome to");
console.log("Welcome to");
console.log("Welcome to");

// --------------------------

// setInterval: executes code repeatedly at specified intervals
// Runs every 2000ms (2 seconds) indefinitely
setInterval(() => {
    console.log("helloWorld");
}, 2000);