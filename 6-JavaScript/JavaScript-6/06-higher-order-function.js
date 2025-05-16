/**
 * Higher order functions are the ones which do one or both of:
 * 1 - takes one or multiple functions as arguments
 * 2 - returns a function
 */

// 1- Taking function as argument
function multipleGreet(func, count) {
    for(let i=0; i<count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

multipleGreet(greet, 2); // NOT multipleGreet(greet(), 2)

// 2- Returns function




function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
           console.log(!(n%2));
        }
    } else if(request == "even") {
        return even = function(n) {
            console.log(n%2);
        }
    } else {
        console.log("wrong request");
    }
}

let request = "odd";
