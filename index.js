// User should enter a word(rock, paper, sissors) via prompt
// The user input will be stored in a varable and compared with
// a computers random generated one
// Game should hav;e a count for the rounds
// First one to win 3 rounds is a winner
 
// let userChoice = prompt("What is your choice?: ");

// create a function for getting a computer choice

const options = ["rock", "paper", "sissors"];

function getComputerChoice () {
    return options[Math.floor(Math.random() * options.length)];
}

console.log(getComputerChoice());