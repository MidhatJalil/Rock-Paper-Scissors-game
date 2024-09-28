function playgame(choice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;
   


    if (choice === computerChoice) {
        result = "It's a tie! Try Next " + userChoice;
       

    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        result = " Congratulations You win! " + choice + " beats " + computerChoice;
       

    } else {
        result = "You Lose! " + computerChoice + " beats " + choice;
       
    }

    
    document.getElementById('result').innerText = result;
    document.getElementById('restart').style.display = 'inline';
  
}

function restart() {
    document.getElementById('result').innerText = '';
    document.getElementById('restart').style.display = 'none';
}