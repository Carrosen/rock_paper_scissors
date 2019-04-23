const { Game } = require('../spec.helper')

describe('Game', () => {
//     let game = new Game
//     let Player1 = ('value1').value
//     let Player2 = ('value2').value

//     // it('returns a string if no game rules are met', () => {
//     //     expect(game.check("bajs")).to.eql('That is not the game pal, try "rock", "paper" or "scissors"')
//     // })

//     it('returns Its a tie if Player1 === Player2', () => {
//         expect(game.check(Player1 === Player2)).to.eql("Its a tie!")
//     })
// })


// //     it('returns Player one is the winner! )



describe('Player1 wins', () => {
    let game = new Game

    it('returns Player1 is the winner if Player1 enters "rock"', () => {
        expect(game.check(Player2)).to.eql("scissors")
    })

    it('returns Player1 is the winner if Player1 enters "paper"', () => {
        expect(game.check(Player2)).to.eql("rock")
    })

    it('returns Player1 is the winner if Player1 enters "scissors"', () => {
        expect(game.check(Player2)).to.eql("paper")
    })

})

describe('Player2 wins', () => {
    let game = new Game

    it('returns Player2 is the winner if Player2 enters "rock"', () => {
        expect(game.check(Player1)).to.eql("scissors")
    })

    it('returns Player2 is the winner if Player2 enters "paper"', () => {
        expect(game.check(Player1)).to.eql("rock")
    })

    it('returns Player2 is the winner if Player2 enters "scissors"', () => {
        expect(game.check(Player1)).to.eql("paper")
    })

})

describe('Its a tie!', () => {
    let game = new Game

    // it('returns Its a tie! if Player1 === Player2', () => {
    //     expect(game.check(Player1 === Player2)).to.eql("Its a tie!")
    // })

    it('returns Its a tie! if Player1 enters "rock"', () => {
        expect(game.check(Player2)).to.eql("rock")
    })

    it('returns Its a tie! if Player1 enters "paper"', () => {
        expect(game.check(Player2)).to.eql("paper")
    })

    it('returns Its a tie! if Player1 enters "scissors"', () => {
        expect(game.check(Player2)).to.eql("scissors")
    })
    
})