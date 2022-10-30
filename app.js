const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const Result = document.getElementById("result");
const possiblechoices = document.querySelectorAll("button");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice;
let computerchoice;
let RESULT;

let computerScore = 0;
let userScore = 0;

let username = prompt("Enter User Name : ");
let opponentName = prompt("Enter Opponent's Name : ");
if (username == "" || username == null) username = "User";
if (opponentName == "" || opponentName == null) opponentName = "Opponent";
computerChoiceDisplay.innerHTML = opponentName + "'s  Choice : 0 ";
userChoiceDisplay.innerHTML = username + "'s  Choice : 0 ";

possiblechoices.forEach((possiblechoice) =>
  possiblechoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = username + "'s Choice : " + userChoice;
    generateComputerChoices();
    getresult();
  })
);

function generateComputerChoices() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerchoice = "paper";
  }

  if (randomNumber === 2) {
    computerchoice = "scissor";
  }

  if (randomNumber === 3) {
    computerchoice = "rock";
  }

  computerChoiceDisplay.innerHTML =
    opponentName + "'s Choice : " + computerchoice;
}

function getresult() {
  if (computerchoice === userChoice) {
    RESULT = "Draw";
  }
  if (computerchoice === "rock" && userChoice === "paper") {
    RESULT = "win";
  }
  if (computerchoice === "rock" && userChoice === "scissor") {
    RESULT = "lose";
  }
  if (computerchoice === "paper" && userChoice === "rock") {
    RESULT = "lose";
  }
  if (computerchoice === "paper" && userChoice === "scissor") {
    RESULT = "win";
  }
  if (computerchoice === "scissor" && userChoice === "rock") {
    RESULT = "win";
  }
  if (computerchoice === "scissor" && userChoice === "paper") {
    RESULT = "lose";
  }

  if (RESULT === "lose") {
    computerScore++;
  } else if (RESULT === "win") {
    userScore++;
  }
  userScoreDisplay.innerHTML = userScore;
  computerScoreDisplay.innerHTML = computerScore;

  result.innerHTML = RESULT;
}

window.onload(() => {});
