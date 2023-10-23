let choice = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let userWin = false;
let computerWin = false;
let buttonChoice = document.querySelectorAll(".choice");
let userSelection = ``;

let restartGame = document.querySelector(".restart");

function game() {
  buttonChoice.forEach(function (button) {
    button.addEventListener(`click`, getChoices);
  });
}

function getChoices(event) {
  if (userScore < 5 && computerScore < 5) {
    userSelection = event.target.textContent;
    let computerSelection = getComputerChoice();

    console.log("Computer's choice: " + computerSelection);
    console.log("User's choice: " + userSelection);

    playRound(computerSelection, userSelection);

    if (userWin) {
      userScore++;
    } else if (computerWin) {
      computerScore++;
    }
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);

    if (userScore === 5) {
      console.log("User wins the game!");
    } else if (computerScore === 5) {
      console.log("Computer wins the game!");
    }
  }
}

function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * choice.length);
  let computerChoice = choice[choiceIndex];
  return computerChoice;
}

function playRound(computerSelection, userSelection) {
  userWin = false;
  computerWin = false;
  if (computerSelection === userSelection) {
    let result = "It's a tie!";
    console.log(result);
  } else if (
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Scissors" && computerSelection === "Paper") ||
    (userSelection === "Paper" && computerSelection === "Rock")
  ) {
    userWin = true;
    let result = `You won! ${userSelection} beats ${computerSelection}!`;
    console.log(result);
  } else {
    computerWin = true;
    let result = `You lose! ${computerSelection} beats ${userSelection}`;
    console.log(result);
  }
}

function restart() {
  userScore = 0;
  computerScore = 0;
  console.clear();
  game();
}
restartGame.addEventListener(`click`, restart);
game();
