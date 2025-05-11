// write a js program to delete all the occurances of a number from the array
let arr = [1,2,3,4,5,6,2,3];
let num = 2;

for(let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i,1);
    } else{;}
}
console.log(arr);
console.log("//////////////")

// write a Js program to find the number of digits in a number
let number = 287152;
let numberOfDigits = 0;
while(number>0) {
    number = Math.floor(number/10); // math.floor rounds off the number to nearest integer
    numberOfDigits++;
}

console.log(numberOfDigits);
console.log("//////////////")

// write a js program to find the sum of the digits in a number
let number2 = 287152;
let sum = 0;

while(number2>0) {
    let lastDigit = number2%10;
    sum += lastDigit;
    number2 = Math.floor(number2/10);
}

console.log(sum);
console.log("//////////////")

// print the factorial of a number n
let number3 = 5;
let factorial = 1;
while(number3 > 1) {
    factorial *= number3;
    number3--;
}
// or
let number4 = 5;
let factorial2 = 1;
for(let i=1; i<=number4; i++) {
    factorial2 *= i;
}

console.log(factorial);
console.log(factorial2);
console.log("//////////////")

let arr2 = [1,2,3,4];
let largest = 0;
for(let i=0; i<arr2.length; i++) {
    if(arr2[i] > largest) {
        largest = arr2[i];
    }
}

console.log(largest);
console.log("//////////////");
