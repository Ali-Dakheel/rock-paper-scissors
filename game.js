const pcChoice = document.createElement('p');
const getComputerChoice = ()=>{
    const picks = ['rock', 'paper','scissors'];
    const randomNum = Math.floor(Math.random()*picks.length);
    console.log('computer picked: '+picks[randomNum]);
    pcChoice.textContent = 'computer picked: '+picks[randomNum];
    return picks[randomNum];
}
const resultsDiv = document.querySelector('.results');

const h1 = document.querySelector('h1');
const roundResult = document.createElement('p');

let counter =0;
let humanScore=0;
let computerScore =0;
const playRound = (humanSelection,computerSelection)=>{
    let winner = null;
    if(humanSelection.match(computerSelection)){
        roundResult.textContent='Draw!';
        console.log('Draw!');
    }
    else if(humanSelection==='rock'&&computerSelection==='scissors'|| humanSelection==='scissors'&&computerSelection==='paper'||humanSelection==='paper'&&computerSelection==='rock'){
        roundResult.textContent='You win!';
        console.log('You win!');
        winner = 'human';
        humanScore++;
        counter++;
    }
    else{
        roundResult.textContent='Computer wins!';
        console.log('Computer wins!');
        winner = 'computer';
        computerScore++;
        counter++;
    }
    if(counter===5){
        if(humanScore>computerScore){
            console.log('You win! ' + 'Your score: '+humanScore+' computer score: '+computerScore);
            h1.textContent = 'You win! ' + 'Your score: '+humanScore+' computer score: '+computerScore;
            roundResult.textContent='';
            pcChoice.textContent='';
        }else{
            console.log('womp womp ' + 'Your score: '+humanScore+' computer score: '+computerScore + 'Your score: '+humanScore+' computer score: '+computerScore);
            h1.textContent = 'womp womp ' + 'Your score: '+humanScore+' computer score: '+computerScore ;
            roundResult.textContent='';
            pcChoice.textContent='';
        }
    
    }else if(counter>5){
        h1.textContent='';
        humanScore=0;
        computerScore=0;
        counter=0;
    }
    return winner;
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let target = event.target;
        let classList = target.classList;
        const computerSelection = getComputerChoice(); 
        if (classList.contains('rock')) {
            playRound('rock', computerSelection);
        } else if (classList.contains('paper')) {
            playRound('paper', computerSelection);
        } else if (classList.contains('scissors')) {
            playRound('scissors', computerSelection);
        }
    });
    resultsDiv.appendChild(pcChoice);
    resultsDiv.appendChild(roundResult);
});

        
    

