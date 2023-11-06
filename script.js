let choice = ["Nuclear Bomb", "Human", "Cockroach"];
let userLives = 5;
let computerLives = 5;
let userWin = false;
let computerWin = false;
let buttonChoice = document.querySelectorAll(".weapon");

let computerOverall = 0;
let userOverall = 0;

let startNew = document.querySelector(".newGame");
let restartAll = document.querySelector(".restartGame");

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

const getOverallScore = document.querySelector(`.overallScore`);
const overallScore = document.createElement(`div`);
const scoreInfo = document.createElement(`p`);
overallScore.classList.add("overallScoreText");
scoreInfo.classList.add("overallScoreText");
overallScore.textContent = ``;
scoreInfo.textContent = ``;
getOverallScore.appendChild(scoreInfo);
getOverallScore.appendChild(overallScore);

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
    startNew.style.display = "block";
    restartAll.style.display = "block";

    if (userWin) {
      computerLives--;
    } else if (computerWin) {
      userLives--;
    }
    score.textContent = `User Lives: ${userLives}, Computer Lives: ${computerLives}`;

    updateScoreTable();
  }
}
function updateScoreTable() {
  if (userLives === 0) {
    win.textContent = `Computer wins the game!`;
    computerOverall++;
  } else if (computerLives === 0) {
    win.textContent = `User wins the game!`;
    userOverall++;
  }
  scoreInfo.textContent = `Overall Score:`;
  overallScore.textContent = `User Score: ${userOverall} Computer Score: ${computerOverall}`;
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

function newGame() {
  win.textContent = ``;
  computerChoice.textContent = ``;
  userChoice.textContent = ``;
  score.textContent = ``;
  result.textContent = ``;
  userSelectionPhoto.src = ``;
  computerSelectionPhoto.src = ``;
  userLives = 5;
  computerLives = 5;
  startNew.style.display = "none";
  game();
}
function restartGame() {
  win.textContent = ``;
  computerChoice.textContent = ``;
  userChoice.textContent = ``;
  score.textContent = ``;
  result.textContent = ``;
  userSelectionPhoto.src = ``;
  computerSelectionPhoto.src = ``;
  userLives = 5;
  computerLives = 5;
  userOverall = 0;
  computerOverral = 0;
  startNew.style.display = "none";
  restartAll.style.display = "none";
  overallScore.textContent = ``;
  scoreInfo.textContent = ``;
  game();
}
startNew.addEventListener(`click`, newGame);
restartAll.addEventListener(`click`, restartGame);

game();
