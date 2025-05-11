let fruits = ["mango", "appla", "banana", "litchi", "orange"];
fruits.push("pinapple")
// printing all elements
for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

console.log("//////////////")

// printing only odd-indexed elements
for(let i=1; i<fruits.length; i+=2) {
    console.log(i, fruits[i]);
}

console.log("//////////////")


// printing elements in reverse
for(let i=fruits.length-1; i>=0; i--) {
    console.log(i, fruits[i]);
}

console.log("//////////////")


// loops with nested arrays
let heroes = [ 
    ["ironman", "spiderman", "thor"], 
    ["superman", "wonderwoman", "flash"]
];

console.log("//////////////")


for(let i=0; i<heroes.length; i++) {
    console.log(`Items of array #${i}`)
    for(let j=0; j<heroes[i].length; j++) {
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}