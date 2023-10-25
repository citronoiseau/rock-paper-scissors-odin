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
const choiceContainer = document.querySelector(`.choiceContainer`);
const userChoice = document.createElement(`p`);
const computerChoice = document.createElement(`p`);
userChoice.textContent = ` `;
computerChoice.textContent = ` `;
choiceContainer.appendChild(userChoice);
choiceContainer.appendChild(computerChoice);

const getResult = document.querySelector(`.roundResult`);
const result = document.createElement(`p`);
result.textContent = ``;
getResult.appendChild(result);

const getScore = document.querySelector(`.scoreContainer`);
const score = document.createElement(`p`);
score.textContent = ``;
const win = document.createElement(`p`);
win.textContent = ``;
getScore.appendChild(score);
getScore.appendChild(win);

function getChoices(event) {
  if (userScore < 5 && computerScore < 5) {
    userSelection = event.target.textContent;
    let computerSelection = getComputerChoice();
    userChoice.textContent = `User's choice: ${userSelection}`;
    computerChoice.textContent = `Computer's choice: ${computerSelection}`;

    playRound(computerSelection, userSelection);

    if (userWin) {
      userScore++;
    } else if (computerWin) {
      computerScore++;
    }
    score.textContent = `User Score: ${userScore}, Computer Score: ${computerScore}`;

    if (userScore === 5) {
      win.textContent = `User wins the game!`;
    } else if (computerScore === 5) {
      win.textContent = `Computer wins the game!`;
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
    result.textContent = "It's a tie!";
  } else if (
    (userSelection === "Rock" && computerSelection === "Scissors") ||
    (userSelection === "Scissors" && computerSelection === "Paper") ||
    (userSelection === "Paper" && computerSelection === "Rock")
  ) {
    userWin = true;
    result.textContent = `You won! ${userSelection} beats ${computerSelection}!`;
  } else {
    computerWin = true;
    result.textContent = `You lose! ${computerSelection} beats ${userSelection}`;
  }
}

function restart() {
  win.textContent = ``;
  computerChoice.textContent = ``;
  userChoice.textContent = ``;
  score.textContent = ``;
  result.textContent = ``;
  userScore = 0;
  computerScore = 0;
  game();
}
restartGame.addEventListener(`click`, restart);
game();
