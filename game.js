// Generating either "Rock", "Paper", or "Scissors"

function getComputerChoice(arr) {
    const index = Math.floor(Math.random()*arr.length);
    const item = arr[index];
    return item;
}
const choices = ["Rock", "Paper", "Scissors"];
const result = getComputerChoice(choices);

let pscore = 0;
let cscore = 0;

function playRound(playerSelection, computerSelection) {

    if((computerSelection === "Paper" && playerSelection == "Scissors") ||
    (computerSelection === "Scissors" && playerSelection == "Rock") ||
    (computerSelection === "Rock" && playerSelection == "Paper")) 
    {
        pscore++;

    }
    else if ((playerSelection === "Paper" && computerSelection == "Scissors") ||
    (playerSelection === "Scissors" && computerSelection == "Rock") ||
    (playerSelection === "Rock" && computerSelection == "Paper")) {
        cscore++;
    }
}

function game(number) {
    for(i = 0; i < number ; i++) {
        let input = prompt("Enter Rock, Paper, or scissors");
        console.log("Computer's choice is", result);
        playRound(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(), result); 
        console.log("Your score is ",pscore, "computers score is ", cscore);
    }

    if(pscore > cscore) {
        console.log("You win!");
    }
    else if (pscore == cscore) {
        console.log("It's a tie!");
    }
    else {
        console.log("You lose!");
    }
}
let games = prompt("How many times do you wanna play? ");
game(Number(games));


