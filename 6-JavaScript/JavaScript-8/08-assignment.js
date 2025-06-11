// 1. sum and square the elements of an array using the arrow function 
// and then find the average of the array
arr = [1,2,3,4,5];
let square = arr.map( (element) => {
    return element**2;
});
console.log(square);

let sum = arr.reduce( (total,element) => {
    return total + element;
});
console.log(sum);

// 2. create a new array using the map function whose each element is equal to 
// the original element + 5
let newArr = arr.map( (element) => {
    return (element + 5);
});
console.log(newArr);

// 3. create a new array whose elements are in uppercase of words present in the original array
let charArr = ['a', 'e', 'i', 'o', 'u'];
let uppercaseCharArr = charArr.map( (element) => {
    return element.toUpperCase();
});

// 4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.
function doubleAndReturnArgs(arr, ...args) {
    newArr = [...arr, ...args];
    finalArr = newArr.map( (element) => {
        return element*2;
    });
    return finalArr;
}
// modification - doubling only the additional arguments 
const doubleAndReturnArgs2 =  (arr, ...args) => [
    ...arr,
    ...args.map( (v) => v*2)
]; 

console.log(doubleAndReturnArgs(arr, 6,7,2,6,78));
console.log(doubleAndReturnArgs2(arr, 6,7,2,6,78));

// 5. Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.
obj1 = {
    a: 1,
    b: 2
};

obj2 = {
    c: 3,
    d:4
};
let merged = function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
};
console.log(merged(obj1, obj2));