// let student1 = "aman";
// let student2 = "shradha";
// let student3 = "rajat";
let students = ["aman", "shradha", "rajat"];
console.log(students);

let nums = [2,3,4,5];
console.log(nums[0]);
console.log(nums[1]);
console.log(nums[4]); // undefined as it is outside the array
console.log(typeof(nums)); // array is of the type 'object'

let info = ["aman", 25, 6.1]; // mixed array
let emptyArray = [] // empty array
console.log(info[0][0]); // 'a'
console.log(info.length); // 3

// arrays are mutable (unlike strings)
let fruits = ["mango", "apple", "litchi"];
console.log("Before changing: ", fruits);
fruits[0] = "banana";
console.log("After changing: ", fruits);
fruits[10] = "papaya"; // elements 4->10 are empty now
console.log(fruits);

// Array Methods
// -----------------
// 1. push
let cars = ["audi", "bmw", "maruti", "xuv"];
console.log("Before push: ", cars);
cars.push("toyota"); // adds 'toyota' at the end of the array
console.log("After push: ", cars);
cars.pop(); // removes 'toyota' from the end of the array;
console.log("After pop: ", cars);
cars.unshift("toyota"); // adds 'toyota' at the start of the array
console.log("After unshift: ", cars);
cars.shift(); // removes 'toyota' at the start of the array
console.log("After shift: ", cars);

// practice question
let months = ["january", "july", "march", "august"]
months.shift(); months.shift();
months.unshift("june"); months.unshift("july")
console.log(months);

// 2. indexOf
let randomArray = ["red", "yellow", "blue"];
console.log(randomArray.indexOf("red")); // 0
console.log(randomArray.indexOf("green")); // -1
console.log(randomArray.indexOf("Red")); // -1

// 3. includes
console.log(randomArray.includes("red")); // true
console.log(randomArray.includes("green")); // false

// 4. concat
let randomArray2 = ["orange", "green", "voilet"];
let allColors = randomArray.concat(randomArray2);
console.log(allColors); // "red", "yellow", "blue", "orange", "green", "voilet"]

// 5. reverse
randomArray2.reverse(); // reverses the original array
console.log(randomArray2);

// 6. slice (copies a portion of an array)
console.log(allColors);
allColors.slice(); // gives the original array
console.log(allColors.slice(2)); // returns items at index 2 -> end
console.log(allColors.slice(2,3)); // returns items at index 2->3(not including 3) 
console.log(allColors.slice(-2)); // returns items at index (length-2 -> end) 

// 7. splice [Syntax: splice(start, delectCount, item0, item1, .... itemN)] -> makes changes in the original array
console.log(cars); // ['audi', 'bmw', 'maruti', 'xuv']
cars.splice(3) // ['audi', 'bmw', 'maruti']
cars.splice(0,1); // ['bmw', 'maruti']
cars.push("toyota");
cars.push("ferrari"); // ['bmw', 'maruti', 'toyota', 'ferrari']
cars.splice(1,2) // ['bmw', 'ferrari']
cars.splice(0,0,"toyota", "xuv", "audi"); // ['toyota', 'xuv', 'audi', 'bmw', 'ferrari']
cars.splice(1,0,"mercedes"); // ['toyota', 'mercedes' 'xuv', 'audi', 'bmw', 'ferrari']
cars.splice(1,1,"gwagon"); // ['toyota', 'gwagon' 'xuv', 'audi', 'bmw', 'ferrari']

// 8. sort (converts to string first and then sorts)
console.log(cars.sort()); // ['audi', 'bmw', 'ferrari', 'gwagon', 'toyota', 'xuv']

let marks = [99, 89, 67, 42, 100];
console.log(marks.sort()); // [100, 42, 67, 89, 99] because sort() converts to string first and then sorts

// practice qs
// 1. convert ['jan', 'july', 'march', 'aug'] --> ['july', 'june', 'march', 'aug']
let months2 = ["jan", "july", "march", "aug"];
console.log(months2.splice(0,2,"july", "june"));

// 2. return the index of Js in the array when reversed. [c, c++, html, js, py, java, c#, sql]
let tech = ["c", "c++", "html", "js", "py", "java", "c#", "sql"];
console.log(tech.reverse().indexOf("js"));



