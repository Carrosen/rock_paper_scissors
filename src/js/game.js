function Game() {
  this.check = (Player1, Player2) => {

    if (Player1 === "Choose" && Player2 === "Choose") {
      return 'You need to select an option';
    } 
    else if (Player1 === Player2) {
      return 'Its a tie!';
    }

    else if ((Player1 === "rock") && (Player2 === "scissors")) {
      return 'Player 1 is the winner!';
    }
    else if ((Player1 === "rock") && (Player2 === "paper")) {
      return 'Player 2 is the winner!';
    }
    else if ((Player1 === "paper") && (Player2 === "rock")) {
      return 'Player 1 is the winner!';
    }
    else if ((Player1 === "paper") && (Player2 === "scissors")) {
      return 'Player 2 is the winner!';
    }
    else if ((Player1 === "scissors") && (Player2 === "paper")) {
      return 'Player 1 is the winner!';
    }
    else if ((Player1 === "scissors") && (Player2 === "rock")) {
      return 'Player 2 is the winner!';
    }
    else {
      return 'You need to select an option';
    }
  }
}