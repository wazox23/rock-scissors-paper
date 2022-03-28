'use strict';

const selectionButtons = document.querySelectorAll("[data-selection]");
let computerSelection;
let playerSelection;
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let resultText = document.getElementById("result-text");

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", (e) => {
        playerSelection = selectionButton.dataset.selection
        game();
        
      
        
        console.log(playerSelection, computerSelection)
    })
    
});

function computerPlay(){
   computerSelection = Math.floor(Math.random() * selectionButtons.length)
    if(computerSelection === 0){ 
        computerSelection = "rock"
    }
    else if(computerSelection === 1){
        computerSelection = "paper"
    } else {
        computerSelection = "scissors"
   };
    return computerSelection;
}

function game(){
    computerPlay();
    
    
    
    if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")){
        playerScore.innerText++;
        resultText.innerText = "Player wins";
     } else if (computerSelection === playerSelection){
        resultText.innerText = "DRAW";
    } 
     else {
         computerScore.innerText++;
         resultText.innerText = "Computer wins";
     };
     
     endGame();
        }
        


function endGame(){
    
    if(playerScore.innerText >= 5){
        resultText.innerText = "Player is a winner!";
        newGame();
    } else if(computerScore.innerText >= 5){
        resultText.innerText = "Computer is a winner!";
        newGame();
    }
}

function newGame(){
    
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    
}

