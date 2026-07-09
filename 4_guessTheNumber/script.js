let randomNumber= parseInt(Math.random()*100+1);

const submitBtn =document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p');

let prevGuess=[];
let numGuess=1;

let playGame=true;

if(playGame){
    submitBtn.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number greater than 0');
    }else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over! The number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed the number in ${numGuess} guesses`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Your guess is too low!');
    }else{
        displayMessage('Your guess is too high!');
    }
}

function displayGuess(guess){
    userInput.value=''; //cleanup method
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;
}

function displayMessage(Message){
    lowOrHi.innerHTML = `<h1>${Message}</h1>`;
}

function endGame(){
    userInput.value=''; //cleanup method
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newGame">Start New Game</h1>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        lowOrHi.innerHTML='';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })
}
