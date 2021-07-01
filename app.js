// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // GET DOM ELEMENTS
const rspBtn = document.getElementById('rsp-btn');
const winsSpan = document.getElementById('total-wins');
const losesSpan = document.getElementById('loses-wins');
const drawsSpan = document.getElementById('draws-wins');

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

});

