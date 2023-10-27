let choice = ["Nuclear Bomb", "Human", "Cockroach"];
let userLives = 5;
let computerLives = 5;
let userWin = false;
let computerWin = false;
let buttonChoice = document.querySelectorAll(".weapon");

let restartGame = document.querySelector(".restart");

const choiceContainer = document.querySelector(`.choiceContainer`);
const userChoiceContainer = document.createElement(`div`);
userChoiceContainer.classList.add("userChoice");
const userChoice = document.createElement(`div`);
let userSelectionPhoto = document.createElement(`img`);
userSelectionPhoto.classList.add("choicePhoto");

const computerChoiceContainer = document.createElement(`div`);
computerChoiceContainer.classList.add("computerChoice");
const computerChoice = document.createElement(`div`);
let computerSelectionPhoto = document.createElement(`img`);
computerSelectionPhoto.classList.add("choicePhoto");

userChoice.textContent = ` `;
computerChoice.textContent = ` `;
userChoiceContainer.appendChild(userChoice);
userChoiceContainer.appendChild(userSelectionPhoto);
computerChoiceContainer.appendChild(computerChoice);
computerChoiceContainer.appendChild(computerSelectionPhoto);

choiceContainer.appendChild(userChoiceContainer);
choiceContainer.appendChild(computerChoiceContainer);

const getResult = document.querySelector(`.roundResult`);
const result = document.createElement(`div`);
result.textContent = ``;
getResult.appendChild(result);

const getScore = document.querySelector(`.scoreContainer`);
const score = document.createElement(`div`);
score.textContent = ``;
const win = document.createElement(`div`);
win.textContent = ``;
getScore.appendChild(score);
getScore.appendChild(win);

function game() {
  buttonChoice.forEach(function (button) {
    button.addEventListener(`click`, getChoices);
  });
}

function getChoices(event) {
  if (userLives > 0 && computerLives > 0) {
    userSelection = event.target.alt;
    userSelectionPhoto.src = event.target.src;

    let computerSelection = getComputerChoice();
    computerSelectionPhoto.src = `img/${computerSelection}.png`;
    userChoice.textContent = `User's choice: `;
    computerChoice.textContent = `Computer's choice: `;

    playRound(computerSelection, userSelection);
    restartGame.style.display = "block";

    if (userWin) {
      computerLives--;
    } else if (computerWin) {
      userLives--;
    }
    score.textContent = `User Lives: ${userLives}, Computer Lives: ${computerLives}`;

    if (userLives === 0) {
      win.textContent = `Computer wins the game!`;
    } else if (computerLives === 0) {
      win.textContent = `User wins the game!`;
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
    (userSelection === "Nuclear Bomb" && computerSelection === "Human") ||
    (userSelection === "Human" && computerSelection === "Cockroach") ||
    (userSelection === "Cockroach" && computerSelection === "Nuclear Bomb")
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
  userSelectionPhoto.src = ``;
  computerSelectionPhoto.src = ``;
  userLives = 5;
  computerLives = 5;
  restartGame.style.display = "none";
  game();
}
restartGame.addEventListener(`click`, restart);

game();
