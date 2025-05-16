// Write a JavaScript function that returns array elements larger than a number
function returnGreaterThan(arr, number) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > number) {
            console.log(arr[i]);
        }
    }
}
let arr = [1,2,3,4,5];
let number = 3;
returnGreaterThan(arr,number);

// ------------------------------------------------------------------------------

// Write a JavaScript function to extract unique characters from a stringing

function extractUniqueChar(string) {
    let answer = "";
    for(let i=0; i<string.length; i++) {
        if(answer.indexOf(string[i]) == -1) {
            answer += string[i];
        } else{;}
    }
    return answer;
}

let string = "abcdabcdefgggh";
console.log(extractUniqueChar(string));
// ------------------------------------------------------------------------------

// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output
function longestCountryName(countries) {
    let maxCountrySize = 0;
    let longestCountryName = "";
    for(let i=0; i<countries.length; i++) {
        let currentCountrySize = countries[i].length;
        if (currentCountrySize > maxCountrySize) {
            maxCountrySize = currentCountrySize;
            longestCountryName = countries[i];
        } else {;}
    }
    return longestCountryName;
}

let countries = ["United States of America", "Germany", "Austringalia"];
console.log(longestCountryName(countries));

// ------------------------------------------------------------------------------

// Write a JavaScript function to count the number of vowels in a stringing argument

function numberOfVowels(string) {
    let numberOfVowels = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            numberOfVowels += 1;
        } else { ; }
    }
    return numberOfVowels;
}

let name = "anudeep";
console.log(numberOfVowels(name)); // 4

// ------------------------------------------------------------------------------

// Write a JavaScript function to generate a random number with in a range (start,end)
function generateRandomNumber(lowerLimit, UpperLimit) {
    let diff = UpperLimit - lowerLimit;
    console.log(Math.floor(Math.random() * diff) + lowerLimit);
}

generateRandomNumber(2,10)