function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?")
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
let human = humanChoice.toLowerCase();
let computer = computerChoice.toLowerCase();
let result = ""

    if (human === computer ) {
        result = ("Draw!");
    }
    else if (human === "rock" && computer === "paper" ) {
        result = ("You lose! Paper beats Rock.");
    }
    else if (human === "rock" && computer === "scissors" ) {
        result = ("You win! Rock beats Scissors.");
    }
    else if (human === "paper" && computer === "scissors" ) {
        result = ("You lose! Scissors beats Paper.");
    }
    else if (human === "paper" && computer === "rock" ) {
        result = ("You win! Paper beats Rock.");
    }
    else if (human === "scissors" && computer === "rock" ) {
        result = ("You lose! Rock beats Scissors.");
    }
    else if (human === "scissors" && computer === "paper" ) {
        result = ("You win! Scissors beats Paper.");
    }
    else {
        result = ("Invalid entry!");
    }
    console.log(result);
    return result;
  }
  
  function playGame() {
    for (let i = 0; i < 5; i++) {  
        let humanSelection = getHumanChoice(); 
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);  

        if (result.includes("win")) {
            humanScore++;  
        } else if (result.includes("lose")) {
            computerScore++; 
        }
    }
}

playGame();

  if (humanScore === computerScore) {
    console.log("Draw! " + humanScore + "-" + computerScore)
  }
  else   if (humanScore > computerScore) {
    console.log("You win! " + humanScore + "-" + computerScore)
  }
  else   if (humanScore < computerScore) {
    console.log("You loose! " + computerScore + "-" + humanScore)
  }