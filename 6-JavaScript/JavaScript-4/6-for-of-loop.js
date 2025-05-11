/**
 * for (element of something) {
*       // do something  
 * }
 */

let fruits = ["mango", "banana", "apple", "orange", "litchi"];
for (fruit of fruits) {
    console.log(fruit);
}

console.log("////////////////")

for (char of "apnacollege") {
    console.log(char);
}

console.log("////////////////")

// Nested for-of loop
let heroes = [ 
    ["ironman", "spiderman", "thor"], 
    ["superman", "wonderwoman", "flash"]
];

for (comic of heroes) {
    for (hero of comic) {
        console.log(hero);
    }
}