const { Game } = require('../spec.helper')

describe('Game', () => {
    let game = new Game
    let Player1 = ('value1').value
    let Player2 = ('value2').value

    // it('returns a string if no game rules are met', () => {
    //     expect(game.check("bajs")).to.eql('That is not the game pal, try "rock", "paper" or "scissors"')
    // })

    it('returns Its a tie if Player1 === Player2', () => {
        expect(game.check(Player1 === Player2)).to.eql("Its a tie!")
    })
})


//     it('returns Player one is the winner! )
