// Generating either "Rock", "Paper", or "Scissors"

function getComputerChoice(arr) {
    const index = Math.floor(Math.random()*arr.length);
    const item = arr[index];
    return item;
}
const choices = ["Rock", "Paper", "Scissors"];

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
    (playerSelection === "Rock" && computerSelection == "Paper")) 
    {
        cscore++;
    }
}
let result = getComputerChoice(choices);
playRound(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase(), result); 
if(pscore > cscore) {
    console.log("You win!");
}
else if (pscore == cscore) {
    console.log("It's a tie!");
}
else {
    console.log("You lose!");
}



