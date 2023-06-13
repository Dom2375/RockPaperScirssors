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
      console.log("It\'s a tie. You both chose " + playerSelection
      + " Player score: " + playerScore + " Computer score: " + cpuScore)
    }
    else {
        cpuScore += 1
        console.log('You lose! ' + " The computer chose " + computerSelection + " which beats " + playerSelection
            + " Player score: " + playerScore + " Computer score: " + cpuScore)

    }

}
function Game(){
  i=0
  while(i<5){
    const playerInput = prompt("Rock, paper or scissors?").toLowerCase();
    const computerInput = getComputerChoice();
    playRound(playerInput, computerInput);
    i++;
  }
  if(playerScore > cpuScore){
    console.log("Congratulations, you won!");
  }
  else if(cpuScore > playerScore){
    console.log("Better luck next time :(");
  }

  else {
    console.log("It's a tie!");
  }
}
Game()
