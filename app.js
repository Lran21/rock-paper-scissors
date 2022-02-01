let playerWins = 0;
let computerWins = 0;
    

function computerPlay(){
    const compChoices = ['Rock', 'Paper', 'Scissors'];
    let compSelection = compChoices[Math.floor(Math.random() * compChoices.length)];
    return compSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 0;
        //return console.log("It's a tie, try again.")
    }
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return 1;
        //return console.log("You win!! Rock beats scissors.")
    } 
    else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return 1;
        //return console.log("You win!! Paper beats Rock!");
    } 
    else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return 1;
        //return console.log("You win!! Scissors beats Paper!");
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return 2;
        //return console.log("You lose! Paper beats Rock.");
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return 2;
        //return console.log("You lose! Scissors beats Paper.");
    }
    else if(PlayerSelection == 'scissors' && computerSelection ==  'rock'){
        return 2;
        //return console.log("You lose! Rock beats Scissors.");
    }
}
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = computerPlay();

        if(playRound(playerSelection, computerSelection) == 0) {
            console.log(`It's a tie. You have both chosen ${computerSelection}`);
        }
        if(playRound(playerSelection, computerSelection) == 1) {
            playerWins++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        if(playRound(playerSelection, computerSelection) == 2) {
            computerWins++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
    }
    if(playerWins > computerWins){
        console.log("Congrats! You have won the game!!");
    }
    else if(playerWins < computerWins){
        console.log("Sorry, you have lost! Try again.");
    }
    else{
        console.log("You have tied");
    }
}


//const playerSelection = prompt("Enter rock, paper, or scissors here:");
//const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
console.log(game());