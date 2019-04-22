const { Game } = require('../spec.helper')

describe('Game', (value1, value2) => {
    let game = new Game

    it('returns a string if no game rules are met', () => {
        expect(game.check("bajs")).to.eql('That is not the game pal, try "rock", "paper" or "scissors"')
    })

    it('returns Its a tie if value1 is eql to value2', () => {
        expect(game.check(value1 === value2)).to.eql("Its a tie!")
    })


    
})