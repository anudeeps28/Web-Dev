// example - 1
// -----------------------------
let age = 23;

if(age >= 18) {
    console.log("You can vote");
} else if (age >= 18) { // executed only when the 'if' condition is false
    console.log("You can vote");
} else if (age < 18) {
    console.log("You cannot vote")
}
// -----------------------------

// Example - 2
// -----------------------------
let marks = 75;

if (marks > 80) {
    console.log("A+");
} else if (marks >= 60) {
    console.log("A");
} else if (marks >= 40) {
    console.log("B");
} else if (marks < 33) {
    console.log("F");
}
// -----------------------------

// Traffic Light system modified
let light = "green";
if (light === "red") {
    console.log("Stop");
}
else if (light === "yellow") {
    console.log("Slow down");
}
else if (light === "green") {
    console.log("Go");
}