var playerScore = 0;
var cpuScore = 0;
function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
          return 'rock'
        case 1:
          return 'paper'
        case 2:
          return 'scissors'
      }
    
}
function playRound(playerSelection, computerSelection){
  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        console.log("You win! " + playerSelection+ " beats " + computerSelection)
        playerScore += 1
    }
    else if (playerSelection == computerSelection) {
      console.log('It\'s a tie. You both chose ' + playerSelection
      + " Player score: " + playerScore + " Computer score: " + cpuScore)
    }
    else {
        cpuScore += 1
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection
            + " Player score: " + playerScore + "<Computer score: " + cpuScore)

    }

}

const playerInput = prompt("Rock, paper or scissors?").toLowerCase();
const computerInput = getComputerChoice();
playRound(playerInput, computerInput)
