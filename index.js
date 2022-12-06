// User should enter a word(rock, paper, sissors) via prompt
// The user input will be stored in a varable and compared with
// a computers random generated one
// Game should hav;e a count for the rounds
// First one to win 3 rounds is a winner
 
// let userChoice = prompt("What is your choice?: ");
let choice = prompt("What do you choose?: ");

function playerChoice() {
    return choice.toLocaleLowerCase();
}

let player = playerChoice();

const choices= ['rock','paper','sissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let computer = getComputerChoice();

function playRound (player, computer) {
    if (player === "rock" && computer === "sissors") || 
       (player === "paper" && computer === "rock")  ||
       (player === "sissors" && computer === "paper") {
        console.log("You won");
       } else if (player === "rock" && computer === "paper") ||
        (player === "paper" && computer === "sissors") ||
        (player === "sissors" && computer === "rock") {
            console.log("Computer won");
        } else if (player === "rock" && computer === "rock") ||
         (player === "paper" && computer === "paper") ||
         (player === "sissors" && computer === "sissors") {
            console.log("Draw");
         }
}
    

const round = playRound(player, computer);

function game(round) {
    for (let i=0; i<5; i++) {
        if (round === "Draw")
    }
}


