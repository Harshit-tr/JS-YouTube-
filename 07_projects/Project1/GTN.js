let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");

const LowORHi = document.querySelector(".lowOrHigh");

const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validatedGuess(guess)
    })
}

function validatedGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid Number')
  } else if(guess < 1){
    alert('Please enter more than 1')
  }else if(guess > 100){
    alert('Please enter less than 100')
  } else{
    prevGuess.push(guess)

    if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over . Random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`You guessed it  right`)
    endGame()
  } else if(guess < randomNumber){
    displayMessage(`Number is Too low`)
  }else if(guess > randomNumber){
    displayMessage(`Number is Too high`)
  }
}
function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess} ,`
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(Mesaage) {
  LowORHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
   const newGameButton = document.querySelector('#newGame')

   newGameButton.addEventListener('click' , (e)=>{
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
      remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
}

