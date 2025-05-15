function sum (a,b) {
    console.log("hello");
    return a+b; // function stops here
    console.log("hello2"); // --> won't be executed
}

function isAdult(age) {
    if(age >=18) {
        return "adult"
    } else {
        return "is not adult";
    }
    console.log("bye!"); // won't be executed
}

s = sum(3,4);
console.log(s); // 7
console.log(sum(sum(1,2),3)); // 6

// Create a function that returns the sum of numbers from one to n
function sum1toN(n) {
    let answer=0;
    for(let i=1; i<=n; i++) {
        answer += i;
    }
    return answer; 
}

console.log(sum1toN(10)); // 55
console.log(sum1toN(100)); // 5050

// Write a program that prints, the concatenation of all the strings in an array
str = ["hi", "hello", "bye", "!"];
function concatString(arr) {
    let answer2 = "";
    for(let i=0; i<str.length; i++) {
        answer2 += str[i];
    }
    return answer2;
}