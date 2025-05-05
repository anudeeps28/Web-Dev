// Q1
let num = 12;

if(num%10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}
// --------------------------

// Q2
let name = prompt("Enter your name");
let age = prompt("Enter your age");
console.log(`${name} is ${age} years old`);
// --------------------------

// Q3
let quarter = 1;

switch(quarter) {
    case 1:
        console.log("January,February,March");
        break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Not a quarter");
}
// --------------------------

// Q4
let string = "Anudeep"
if ((string[0] == "A" || string[0] == "a") && string.length > 5) {
    console.log("Golden String");
} else {
    console.log("Not a golden string");
}
// --------------------------

// Q5
let a = 2;
let b = 3;
let c = 4;

if (a > b && a > c) {
    console.log(`${a} is the greatest number out of ${a}, ${b} and ${c}`);
} else if (b > c) {
    console.log(`${b} is the greatest number out of ${a}, ${b} and ${c}`);
} else {
    console.log(`${c} is the greatest number out of ${a}, ${b} and ${c}`);
}
// --------------------------

// Q6
let num1 = 32;
let num2 = 47852;

if (num1%10 == num2%10) {
    console.log(`${num1} and ${num2} have the same last digit, which is ${num1%10}`);
} else {
    console.log(`${num1} and ${num2} do NOT have the same last digit`);
}
