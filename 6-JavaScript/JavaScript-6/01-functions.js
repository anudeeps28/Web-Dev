function hello() {
    console.log("Hello");
}

function printName() {
    console.log("Anudeep")
}

function print1to5() {
    for(let i=0; i<5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age=18;
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not an Adult");
    }
}

// create a function that prints a poem
function printPoem() {
    console.log("Twinkle Twinkle little star");
    console.log("How I wonder what you are");
}

// create a function to roll a dice and always display the value of the dice (1 to 6)
function rollDice() {
    let random = Math.floor(Math.random() * 6) + 1
    console.log(random);
}

// functions with parameters
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}`);
}
function sum(a, b) {
    console.log(a+b);
}

// Create a function that gives the average of three numbers
function average(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
}

// Create a function to print the multiplication table of a number
function printTable(number) {
    for(let i=1; i<=10; i++) {
        console.log(number*i)
    }
}

hello();
hello();
hello();
printName();
printName();
print1to5();
isAdult();
printPoem();
rollDice();
printInfo("Anudeep", 27);
sum(45,18);
printTable(2);
