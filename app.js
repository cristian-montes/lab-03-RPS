// import functions and grab DOM elements
import { didUserWin } from './utils.js';
// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // GET DOM ELEMENTS
const rspBtn = document.getElementById('rsp-btn');
const winsSpan = document.getElementById('total-wins');
const losesSpan = document.getElementById('total-loses');
const drawsSpan = document.getElementById('total-draws');

// let randomChoice = Math.ceil(Math.random()*3)
// console.log(randomChoice);

  // INITIALIZE STATE
let wins = 0;
let loses = 0;
let draws = 0;




// funRandomNum function
function funRandomNum(randomNum){
    randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1){
        return 'rock';
    } else if (randomNum === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}






  // RSP BUTTON EVENT LISTENER
rspBtn.addEventListener('click', ()=> {
    const selected = document.querySelector('input[type=radio]:checked'); 
    const userChoice = selected.value;
    const compuChoise = funRandomNum();

    const isWinner = didUserWin(userChoice, compuChoise);
    if (isWinner === 'WIN'){
        wins++;
    } if (isWinner === 'DRAW') {
        draws++;
    } if (isWinner === 'LOSS'){
        loses++;
    }

    winsSpan.textContent = wins;
    losesSpan.textContent = loses;
    drawsSpan.textContent = draws;


});

