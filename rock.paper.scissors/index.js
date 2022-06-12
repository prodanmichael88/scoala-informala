const pcChoiceDisplay=document.getElementById('pcChoice')
const userChoiceDisplay=document.getElementById('userChoice')
const possibleChoices= document.querySelectorAll('button')
const resultDisplay=document.getElementById('result')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
        userChoice = e.target.id
        if(userChoice === 'rock'){
            userChoiceDisplay.style.backgroundImage='url(rock.jpg)'
        }
        else if(userChoice === 'paper'){
            userChoiceDisplay.style.backgroundImage='url(paper.jpg)'
        }
        else{
            userChoiceDisplay.style.backgroundImage='url(scissors.webp)'
        }
        generateComputerChoice()
        getResult()
    }))

function generateComputerChoice(){
        const randomNumber=Math.ceil(Math.random() * possibleChoices.length)
        if(randomNumber===1){
            computerChoice='rock'
            pcChoiceDisplay.style.backgroundImage='url(rock.jpg)'
        }
        if(randomNumber===2){
            computerChoice='paper'
            pcChoiceDisplay.style.backgroundImage='url(paper.jpg)'
        }
        if(randomNumber===3){
            computerChoice='scissors'
            pcChoiceDisplay.style.backgroundImage='url(scissors.webp)'
        }
        
    }

function getResult(){
        if(computerChoice===userChoice){
            result="It's a draw"
        }
        else if(computerChoice==='rock'&& userChoice==='paper'){
            result='You Win'
        }
        else if(computerChoice==='rock'&& userChoice==='scissors'){
            result='You Lost'
        }
        else if(computerChoice==='paper'&& userChoice==='rock'){
            result='You Lost'
        }
        else if(computerChoice==='paper'&& userChoice==='scissors'){
            result='You Win'
        }
        else if(computerChoice==='scissors'&& userChoice==='paper'){
            result='You Lost'
        }
        else  {
            result='You Win'
        }
        resultDisplay.innerHTML=result;

    }
