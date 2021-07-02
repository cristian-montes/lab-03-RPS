export function didUserWin(userChoice, compuChoise){
    if (userChoice === 'rock' && compuChoise === 'scissors'){
        return 'WIN';
    } if (userChoice === 'scissors' && compuChoise === 'paper'){
        return 'WIN';
    } if (userChoice === 'paper' && compuChoise === 'rock'){
        return 'WIN';
    } if (userChoice === compuChoise){
        return 'DRAW';
    } else {
        return 'LOSS';
    }
}