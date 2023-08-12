// Generating either "Rock", "Paper", or "Scissors"

function getComputerChoice(arr) {
    const index = Math.floor(Math.random()*arr.length);
    const item = arr[index];
    return item;
}

const choices = ["Rock", "Paper", "Scissors"];
console.log("Testing");
const result = getComputerChoice(choices);
console.log("Computer's choice is", result);
