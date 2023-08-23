// // Generating either "Rock", "Paper", or "Scissors"

const playerFist = document.querySelector('.player');
const computerFist = document.querySelector('.computer');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const pscore = document.querySelector('.player-score');
const cscore = document.querySelector('.computer-score');
const final = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    const computerGif = {
        rock: 'cr.gif',
        paper: 'cp.gif',
        scissors: 'cs.gif' 
    };

    playerFist.src = `${playerChoice}.gif`;
    computerFist.src =  computerGif[computerChoice];

    const result = determineWinner(playerChoice, computerChoice);

    if(result === "You win!") {
        playerScore++;
    }
    else if(result === "Computer wins") {
        computerScore++;
    }

    pscore.textContent = `Player: ${playerScore}`;
    cscore.textContent = `Computer: ${computerScore}`;

    if(playerScore === 5 || computerScore === 5) {
        score(playerScore, computerScore);
    }

}

function determineWinner(playerChoice, computerChoice) {
    if(
    (computerChoice === "paper" && playerChoice == "scissors") ||
    (computerChoice === "scissors" && playerChoice == "rock") ||
    (computerChoice === "rock" && playerChoice == "paper")
    ) 
    {
        return "You win!";

    }
    else if (
    (playerChoice === "paper" && computerChoice == "scissors") ||
    (playerChoice === "scissors" && computerChoice == "rock") ||
    (playerChoice === "rock" && computerChoice == "paper")
    ) 
    {
        return "Computer wins";
    }
}
function score(playerScore, computerScore) {
    console.log("Updating final result...");
    if(playerScore === 5) {
        final.textContent = "Result: You win!" 
    }
    else if(playerScore === computerScore) {
        final.textContent= "Result: It's a tie!"
    }
    else if(computerScore === 5) {
        final.textContent= "Result: You lose!"
    }
}



