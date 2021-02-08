let userChosen
let computerChosen
const displayResult = document.getElementById('result')
const userChoice = document.getElementById('your-choice')
var result = results()
const possibleChoices = document.querySelectorAll('.choices')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))



// Get users userChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChosen = e.target.id
  generatedComputerChoice()
  results()
  userChoice.innerHTML = userChosen
  computerChoice.innerHTML = computerChosen
  displayResult.innerHTML = result
}))

//Get a random computers choice
function generatedComputerChoice() {
  if (randomNumber === 1) {
    return computerChosen = 'rock'
  } else if (randomNumber === 2) {
    return computerChosen = 'paper'
  } else if (randomNumber === 3) {
    return computerChosen = 'scissors'
  }
}

function results() {
  if (computerChosen == userChosen) {
    return result = 'There was a tie'
  } else if (computerChosen === 'rock' && userChosen === 'paper') {
    return result = 'you lost'
  } else if (computerChosen === 'rock' && userChosen === 'scissors') {
    return result = 'you win!'
  } else if (computerChosen === 'paper' && userChosen === 'rock') {
    return result = 'you lost'
  } else if (computerChosen === 'paper' && userChosen === 'scissors') {
    return result = 'you win!'
  } else if (computerChosen === 'scissors' && userChosen === 'rock') {
    return result = 'you win!'
  } else if (computerChosen === 'scissors' && userChosen === 'paper') {
    return result = 'you lost'
  }
}