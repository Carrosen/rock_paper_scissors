const { Game } = require('../spec.helper')

describe('Game', () => {
    let game = new Game

    it('returns a number if no game rules are met', () => {
        expect(game.check(1)).to.eql(1)
    })


    
})