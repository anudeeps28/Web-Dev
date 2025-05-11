console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

console.log("///////////////")

// for loop in Js
for(let i=1; i<=5; i++) {
    console.log(i);
}

console.log("///////////////")

for(let i=5; i>=1; i--) {
    console.log(i);
}

console.log("///////////////")

// Practice q - print odd numbers (1 -> 15)
for(let i=1; i<=15; i++) {
    if(i%2 != 0) {
        console.log(i);
    } else{;}
}

console.log("///////////////")

for(let i=15; i>=1; i--) {
    if(i%2 != 0) {
        console.log(i);
    } else{;}
}
console.log("///////////////")


// Practice q - print even numbers ()
for(let i=0; i<=10; i++) {
    if(i%2 == 0) {
        console.log(i);
    } else{;}
}

console.log("///////////////")

for(let i=10; i>=0; i--) {
    if(i%2 == 0) {
        console.log(i);
    } else{;}
}

console.log("///////////////")

// Infinite loop -> bad for the code
/**
 * Examples:
    * (let i=1; i>=0; i++)
    * (let i=1; i<=5; i--)
    * (let i=1; ; i++)
 */

// practice q - multiplication table
let n = prompt("Enter your number");
n = parseInt(n);

for(let i=n; i<=n*10; i += n) {
    console.log(i);
}   

console.log("///////////////")

// nested loops
for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}