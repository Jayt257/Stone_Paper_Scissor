const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const Result = document.getElementById("result")
const possiblechoices = document.querySelectorAll("button")

let userChoice
let computerchoice
let RESULT
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
        RESULT = "win"
    }
    if(computerchoice === "rock" && userChoice === "scissor"){
        RESULT = "lose"
    }
    if(computerchoice === "paper" && userChoice === "rock"){
        RESULT = "lose"
    }
    if(computerchoice === "paper" && userChoice === "scissor"){
        RESULT = "win"
    }
    if(computerchoice === "scissor" && userChoice === "rock"){
        RESULT = "win"
    }
    if(computerchoice === "scissor" && userChoice === "paper"){
        RESULT = "lose"
    }


    result.innerHTML = RESULT
}
