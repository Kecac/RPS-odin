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

function getPlayerChoice() {
    let validation = false;
    while (validation == false) {
        const choice = prompt("What is your choice?");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (options.includes(choiceInLower)) {
            validation = true;
            return choiceInLower;
        }
    }
}

// create a function to play a single round of RPS and consloe.log a winer
// call on two arguments player and computer

function round(player, computer) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if ((playerSelection == "rock" && computerSelection == "sissors") ||
       (playerSelection == "paper" && computerSelection == "rock") || 
       (playerSelection == "sissors" && computerSelection == "paper")) {
        return `Player has won, ${playerSelection} beats ${computerSelection}.`;
       } 
       else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "sissors") ||
        (playerSelection == "sissors" && computerSelection == "rock")) {
            return `Computer has won, ${computerSelection} beats ${playerSelection}`;
        } 
        else if (
            (playerSelection == computerSelection) 
        ) {
            return "Its a tie;"
        }
}