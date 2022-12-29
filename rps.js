//Create array that has the choices for RPS game
let gameArr = ['rock', 'paper', 'scissors'];

//Variable to return a random element from the gameArr array
let getComputerChoice = gameArr[Math.floor(Math.random()*gameArr.length)];



//function to compare computer selection and player selection to determine win/lose/tie
function singleRound (playerselection, computerSelection){
    if (playerselection === 'rock' && computerSelection === 'scissors' 
    || playerselection == 'scissors' && computerSelection === 'paper' 
    || playerselection === 'paper' && computerSelection === 'rock' ){
        return "Player wins"
    }else if (playerselection === computerSelection){
        return "Tie!";
    }else
        return "Machine Wins!";
}

//variable for player selection
const playerselection = 'paper';

//variable for computer selection
const computerSelection =getComputerChoice;


console.log(playerselection);
console.log(computerSelection);
console.log(singleRound(playerselection, computerSelection));