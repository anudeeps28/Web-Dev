const favoriteMovie = "avatar";
let input = prompt("Guess my favorite movie");

while ((input != favoriteMovie) && (input != "quit")) {
    console.log("Wrong guess");
    input = prompt("Wrong guess, Please try again.")
}

if (input == favoriteMovie) {
    console.log("Congratulations");
} else {
    ;
}