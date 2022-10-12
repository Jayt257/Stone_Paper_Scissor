const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const Result = document.getElementById("result")
const possiblechoices = document.querySelectorAll("button")
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userChoice
let computerchoice
let RESULT

let computerScore = 0;
let userScore = 0;

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener("click", (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoices()
    getresult()

} ))

function generateComputerChoices(){
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        computerchoice = "paper"
    }
    
    if(randomNumber === 2){
        computerchoice = "scissor"
    }
    
    if(randomNumber === 3){
        computerchoice = "rock"
    }

    computerChoiceDisplay.innerHTML = computerchoice
} 

function getresult(){
    if(computerchoice === userChoice){
        RESULT = "Draw"
    }
    if(computerchoice === "rock" && userChoice === "paper"){
        RESULT = "Win"
    }
    if(computerchoice === "rock" && userChoice === "scissor"){
        RESULT = "Lose"
    }
    if(computerchoice === "paper" && userChoice === "rock"){
        RESULT = "Lose"
    }
    if(computerchoice === "paper" && userChoice === "scissor"){
        RESULT = "Win"
    }
    if(computerchoice === "scissor" && userChoice === "rock"){
        RESULT = "Win"
    }
    if(computerchoice === "scissor" && userChoice === "paper"){
        RESULT = "Lose"
    }

    if (RESULT === "Lose") {
        computerScore++;
    } else if (RESULT === "Win") {
        userScore++;
    }
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;

    result.innerHTML = RESULT
}
