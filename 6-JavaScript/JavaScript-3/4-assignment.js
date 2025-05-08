// 1. program to get the first n elements from an array
let array = [7,9,0,-2]
console.log(array);
let n = 3;
let ans = array.slice(0,n);
console.log(ans);

// 2. program to get the first last elements from an array
let array2 = [7,9,0,-2];
let n2 = 3;
console.log(array2);
let ans2 = array2.slice(array2.length-n);
console.log(ans2);

// 3. JavaScript program to check whether a string is blank or not
let str = "abc";
if (str.length == 0) {
    console.log("empty string");
} else {
    console.log("NOT an empty string");
}

// 4. write a program to test whether the character at a given character index is lowercase or not
let str2 = "Abcd"
let index = 1;
if(str2[index] == str2[index].toLocaleLowerCase()) {
    console.log("it is a lower case letter");
} else {
    console.log("it is an upper case letter");
}

// 5. write a program to strip leading and trailing spaces from a string
let str3 = "   swe    ";
console.log("original string:", str3);
console.log("string after trimming:", str3.trim())

// 6. write a program to check if an element exists in an array or not
let randomArray = ["red", "yellow", "blue"];
let key = "black";
if(randomArray.indexOf(key) == -1) {
    console.log("Item is not present in the array");
} else {
    console.log("Item is present in the array");
}