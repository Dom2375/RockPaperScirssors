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
var computerChoice = getComputerChoice();   
console.log(computerChoice);
