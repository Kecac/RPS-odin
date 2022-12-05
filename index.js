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
    if (player === "rock" && computer === "rock") {
        console.log("Its a draw");
    } else if (player === "rock" && computer === "paper") {
        console.log("Computer has won");
    } else if (player === "rock" && computer === "sissors") {
        console.log("You have won");
    } else if (player === "paper" && computer === "paper") {
        console.log("Its a draw");
    } else if (player === "paper" && computer === "sissors") {
        console.log("Computer has won");
    } else if (player === "paper" && computer === "rock") {
        console.log("You have won");
    } else if (player === "sissors" && computer === "sissors") {
        console.log("Its a draw");
    } else if (player === "sissors" && computer === "rock") {
        console.log("Computer has won");
    } else if (player === "sissors" && computer === "paper") {
        console.log("You have won");
    }
}

const round = playRound(player, computer);
console.log(round);


