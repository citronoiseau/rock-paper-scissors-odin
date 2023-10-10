let choice = ["Rock", "Paper", "Scissors"];
let userScore = 0;
let computerScore = 0;
let userWin = false;
let computerWin = false;
function game() {
  while (userScore < 5 && computerScore < 5) {
    function getComputerChoice() {
      let choiceIndex = Math.floor(Math.random() * choice.length);
      let computerChoice = choice[choiceIndex];
      return computerChoice;
    }
    let computerSelection = getComputerChoice();
    computerSelection =
      computerSelection[0].toUpperCase() + computerSelection.slice(1);

    let userSelection = prompt("Rock, Paper or Scissors?");
    userSelection = userSelection[0].toUpperCase() + userSelection.slice(1);

    console.log("Computer's choice: " + computerSelection);
    console.log("User's choice: " + userSelection);

    playRound(computerSelection, userSelection);

    if (userWin) {
      userScore++;
    } else if (computerWin) {
      computerScore++;
    }
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
    if (userScore === 5 || computerScore === 5) {
      break;
    }
  }
  if (userScore === 5) {
    console.log("User wins the game!");
  } else {
    console.log("Computer wins the game!");
  }
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

game();
