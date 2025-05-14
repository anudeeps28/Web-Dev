// JavaScript’s built-in Math object is a namespace for 
// common mathematical constants and functions. 

// Constants
console.log(Math.PI);        // 3.141592653589793
console.log(Math.E);         // 2.718281828459045

// Rounding
Math.floor(3.7);             // 3 -> nearest smallest integer value
Math.ceil(3.1);              // 4 -> nearest largest integer value
Math.round(3.5);             // 4
Math.trunc(3.9);             // 3

// Powers and roots
Math.pow(2, 5);              // 32
Math.sqrt(16);               // 4
Math.cbrt(27);               // 3

// Trigonometry (arguments in radians)
Math.sin(Math.PI/2);         // 1
Math.cos(0);                 // 1

// Exponentials and logarithms
Math.exp(1);                 // e¹ → 2.718…
Math.log(Math.E);            // 1
Math.log10(1000);            // 3

// Min, max, absolute, sign
Math.min(3, 7, -2, 5);       // -2
Math.max(3, 7, -2, 5);       // 7
Math.abs(-42);               // 42
Math.sign(-10);              // -1

// Random numbers
Math.random();               // e.g. 0.374839…  in [0,1)