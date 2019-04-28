function Game() {
    let Player1 = ('value1').value
    let Player2 = ('value2').value
    this.check = (Player1, Player2)
  
            if (Player1 === Player2) {
                return 'Its a tie!';
            } 
        
            else if ((Player1 === "rock") && (Player2 === "scissors")) {
                return 'Player1 is the winner!';
            }
            else if ((Player1 === "rock") && (Player2 === "paper")) {
                return 'Player2 is the winner!';
            }
            else if ((Player1 === "paper") && (Player2 === "rock")) {
                return 'Player1 is the winner!';
            }
            else if ((Player1 === "paper") && (Player2 === "scissors")) {
                return 'Player2 is the winner!';
            }
            else if ((Player1 === "scissors") && (Player2 === "paper")) {
                return 'Player1 is the winner!';
            }
            else if ((Player1 === "scissors") && (Player2 === "rock")) {
                return 'Player2 is the winner!';
            }
            else {
                return 'That is not the game pal, try "rock", "paper" or "scissors"';
            }
    }