// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('test a function DIDUSERWIN', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expectedWin = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const win1 = didUserWin('rock', 'scissors');
    const win2 = didUserWin('paper', 'rock');
    const win3 = didUserWin('scissors', 'paper');

    const loss1 = didUserWin('scissors', 'rock');
    const loss2 = didUserWin('rock', 'paper');
    const loss3 = didUserWin('paper', 'scissors');

    const draw1 = didUserWin('rock', 'rock');
    const draw2 = didUserWin('paper', 'paper');
    const draw3 = didUserWin('scissors', 'scissors');


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(win1, 'WIN');
    expect.equal(loss1, 'LOSS');
    expect.equal(draw1, 'DRAW');

    expect.equal(win2, 'WIN');
    expect.equal(loss2, 'LOSS');
    expect.equal(draw2, 'DRAW');

    expect.equal(win3, 'WIN');
    expect.equal(loss3, 'LOSS');
    expect.equal(draw3, 'DRAW');
   
    
});
