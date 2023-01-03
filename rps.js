//Create an array that has the choices for the game
const gameArr = ['rock', 'paper', 'scissors'];

//Return a random elem from the gameArr
const computerSelection = gameArr[Math.floor(Math.random()*gameArr.length)];

//variable for player selection
 let playerSelection = prompt("Choose: Rock/Paper/Scissors",'');

//will automatically lowercase user input to match gameArr;
const userChoice = playerSelection.toLowerCase();

//keep score of computer vs user
let playerScore = 0;
let compScore = 0;

    function singleRound (userChoice, computerSelection){
    if (userChoice === 'rock' && computerSelection === 'scissors' 
        || userChoice === 'scissors' && computerSelection === 'paper' 
        || userChoice === 'paper' && computerSelection === 'rock' ){
            playerScore++
            return `${userChoice} beats ${computerSelection}, you win!`
    }else if (userChoice === computerSelection){
        return "Tie!";
    }else 
        compScore++
        return `${computerSelection} beats ${userChoice}, Machine wins!`;
}
      
    function game(){
        for(let i =0; i <5; i++){
        const computerSelection = gameArr[Math.floor(Math.random()*gameArr.length)];
        let playerSelection = prompt("Choose: Rock/Paper/Scissors",'');
        singleRound(playerSelection, computerSelection); 

        console.log(`User selected: ${userChoice}`);
        console.log(`Machine selected: ${computerSelection}`);
        console.log(singleRound(userChoice, computerSelection));
        }
        if (playerScore > compScore){
            return  `You win! You: ${playerScore} Machine ${compScore}`;
        }else if (compScore > playerScore){
            return `Machine Wins! You: ${playerScore} Machine ${compScore}`;
        }else{
            return `It's a tie! You: ${playerScore} Machine ${compScore}`;
        } 
        
    }
    

console.log(game());
   
    



