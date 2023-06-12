function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
          return 'ROCK'
        case 1:
          return 'PAPER'
        case 2:
          return 'SCISSORS'
      }
    
}
function playRound(playerChoice, computerChoice){

}
const playerInput = prompt("Rock, paper or scissors?")
var computerInput = getComputerChoice();   
console.log(computerChoice);
