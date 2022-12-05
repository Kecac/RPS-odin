// User should enter a word(rock, paper, sissors) via prompt
// The user input will be stored in a varable and compared with
// a computers random generated one
// Game should have a count for the rounds
// First one to win 3 rounds is a winner
 
// let userChoice = prompt("What is your choice?: ");
let choice = prompt("What do you choose?: ");
function playerChoice() {
    return choice.toLocaleLowerCase();
}
let player = playerChoice();
console.log(player);
const choices= ['rock','paper','sissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let computer = getComputerChoice();


