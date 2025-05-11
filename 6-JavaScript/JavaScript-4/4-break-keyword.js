// break -> gets us out of a loop (generally used with while-loop)
let i=1;

while(i<=5) {
    if (i==3) {
        break;
    }
    console.log(i);
    i++;
}

console.log("we used break keyword at 3");

console.log("///////////");

// modified game logic using break
const favoriteMovie = "avatar";
let input = prompt("Guess my favorite movie");

while (input != favoriteMovie) {
    if(input == "quit") {
        console.log("you quit the game");
        break;
    }
    console.log("Wrong guess");
    input = prompt("Wrong guess, Please try again.")
}

if (input == favoriteMovie) {
    console.log("Congratulations");
} else {;}
