const { Game } = require('../spec.helper')

describe('Game', () => {
  let game = new Game

  it('returns a string if no game rules are met', () => {
    expect(game.check('Choose', 'Choose')).to.eql('You need to select an option')
  })

  describe('Player1 wins', () => {
    it('returns Player1 is the winner if Player1 enters "rock"', () => {
      expect(game.check('rock', 'scissors')).to.eql('Player 1 is the winner!')
    })

    it('returns Player1 is the winner if Player1 enters "paper"', () => {
      expect(game.check('paper', 'rock')).to.eql('Player 1 is the winner!')
    })

    it('returns Player1 is the winner if Player1 enters "scissors"', () => {
      expect(game.check('scissors', 'paper')).to.eql('Player 1 is the winner!')
    })
  })

  describe('Player2 wins', () => {
    it('returns Player2 is the winner if Player2 enters "rock"', () => {
      expect(game.check('scissors', 'rock')).to.eql('Player 2 is the winner!')
    })

    it('returns Player2 is the winner if Player2 enters "paper"', () => {
      expect(game.check('rock', 'paper')).to.eql('Player 2 is the winner!')
    })

    it('returns Player2 is the winner if Player2 enters "scissors"', () => {
      expect(game.check('paper', 'scissors')).to.eql('Player 2 is the winner!')
    })
  })

  describe('Its a tie!', () => {
    it('returns Its a tie! if Player1 enters "rock"', () => {
      expect(game.check('rock', 'rock')).to.eql("Its a tie!")
    })

    it('returns Its a tie! if Player1 enters "paper"', () => {
      expect(game.check('paper', 'paper')).to.eql("Its a tie!")
    })

    it('returns Its a tie! if Player1 enters "scissors"', () => {
      expect(game.check('scissors', 'scissors')).to.eql("Its a tie!")
    })
  })

  describe('You need to select an option', () => {
    it('returns string if Player1 does not enter an option', () => {
      expect(game.check('Choose', 'rock')).to.eql("You need to select an option")
    })

    it('returns string if Player1 does not enter an option', () => {
      expect(game.check('Choose', 'paper')).to.eql("You need to select an option")
    })

    it('returns string if Player1 does not enter an option', () => {
      expect(game.check('Choose', 'scissors')).to.eql("You need to select an option")
    })

    it('returns string if Player2 does not enter an option', () => {
      expect(game.check('rock', 'Choose')).to.eql("You need to select an option")
    })

    it('returns string if Player2 does not enter an option', () => {
      expect(game.check('paper', 'Choose')).to.eql("You need to select an option")
    })

    it('returns string if Player2 does not enter an option', () => {
      expect(game.check('scissors', 'Choose')).to.eql("You need to select an option")
    })
  })

})
