let humanScore = 0;
let computerScore = 0;

let humanScoreSpan = document.getElementById("humanScore");
let computerScoreSpan = document.getElementById("computerScore");
let scoreReport = document.getElementById("scoreReport");

humanScoreSpan.textContent = humanScore;
computerScoreSpan.textContent = computerScore;

const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => playRound(buttons[i].id, getComputerChoice()));
}

// FUNCTIONS
function getComputerChoice () {
    switch (Math.floor (Math.random() * 3)) {   // returns a number from 0 - 2
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Error computing random number.");
            break;
    } 
}

function playRound (humanChoice, computerChoice) {
    // print choices
    console.log(`You throw ${humanChoice}`);
    console.log(`I throw ${computerChoice}`);

    // compute winner
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper")
        {
            scoreReport.textContent = "You win!";
            humanScore++;
            humanScoreSpan.textContent = humanScore;
        }
    else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock")
        {
            scoreReport.textContent = "You lose..."
            
            computerScore++;
            computerScoreSpan = computerScore;
        }
    else {
        scoreReport.textContent = "Its a draw."
    }
}