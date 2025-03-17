// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Score tracking
let humanScore = 0;
let computerScore = 0;

// Create a container for buttons and results
const container = document.body;

// Create a div to display results
const resultDiv = document.createElement("div");
resultDiv.style.marginTop = "20px";
resultDiv.style.fontSize = "18px";
resultDiv.style.fontWeight = "bold";
resultDiv.style.padding = "10px";
resultDiv.style.border = "2px solid black";
resultDiv.style.width = "fit-content";
resultDiv.textContent = "Make your choice!";
container.appendChild(resultDiv);

// Create a div to display the score
const scoreDiv = document.createElement("div");
scoreDiv.style.marginTop = "10px";
scoreDiv.style.fontSize = "16px";
scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;
container.appendChild(scoreDiv);

// Choices
const choices = ["Rock", "Paper", "Scissors"];

choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.style.margin = "10px";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";

    // Add event listener to play a round and update the result
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice(); // ✅ Store computer choice once
        console.log(`Computer chose: ${computerChoice}`); // Debugging line

        const result = playRound(choice.toLowerCase(), computerChoice.toLowerCase());
        resultDiv.textContent = result;
        scoreDiv.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

        // Check if there's a winner
        if (humanScore === 5) {
            resultDiv.textContent = "🎉 You win the game! 🎉";
            disableButtons();
        } else if (computerScore === 5) {
            resultDiv.textContent = "💀 Computer wins the game! 💀";
            disableButtons();
        }
    });

    container.appendChild(button);
});

// Function to disable buttons after the game ends
function disableButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
        result = `It's a Draw! You both chose ${capitalize(humanChoice)}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
        humanScore++; // ✅ Now correctly updates only when you win
    } else {
        result = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
        computerScore++; // ✅ Now correctly updates only when the computer wins
    }

    return result;
}

// Helper function to capitalize first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
