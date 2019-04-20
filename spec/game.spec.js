describe('Game', () => {
    let game = new Game

    it('returns a string if no game rules are met', () => {
        expect(game.check(string)).to.eql(string)
    })


    
})