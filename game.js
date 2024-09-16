const getComputerChoice = ()=>{
    const picks = ['rock', 'paper','scissors'];
    const randomNum = Math.floor(Math.random()*picks.length);
    console.log('computer picked: '+picks[randomNum]);
    return picks[randomNum];
}

const getHumanChoice = ()=>{
    const getChoice = prompt('Rock, paper or scissors!');
    return getChoice.toLowerCase();
}
const playRound = (humanSelection,computerSelection)=>{
    let winner = null;
    if(humanSelection.match(computerSelection)){
        console.log('Draw!');
    }
    else if(humanSelection==='rock'&&computerSelection==='scissors'|| humanSelection==='scissors'&&computerSelection==='paper'||humanSelection==='paper'&&computerSelection==='rock'){
        console.log('You win!');
        winner = 'human';
    }
    else{
        console.log('Computer wins!');
        winner = 'computer';
    }
    return winner;
}
const h1 = document.querySelector('.winner');
const playGame = ()=> {
    let humanScore=0;
    let computerScore =0;
    for(let i=0;i<5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();    
        let winner=playRound(humanSelection,computerSelection);
        winner === 'human' ? humanScore++ :
        winner === 'computer' ? computerScore++ :
        winner === 'draw' ? null : null;
    }
    if(humanScore>computerScore){
        console.log('You win! ' + 'Your score: '+humanScore+' computer score: '+computerScore);
        h1.textContent = 'You win! ' + 'Your score: '+humanScore+' computer score: '+computerScore;
    }else{
        console.log('womp womp ' + 'Your score: '+humanScore+' computer score: '+computerScore + 'Your score: '+humanScore+' computer score: '+computerScore);
        h1.textContent = 'womp womp ' + 'Your score: '+humanScore+' computer score: '+computerScore + 'Your score: '+humanScore+' computer score: '+computerScore;

    }
}
playGame();