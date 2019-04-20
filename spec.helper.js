const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;

const fs = require('fs');
let game = fs.readFileSync('./src/js/game.js');
eval( game + `\nexports.Game = Game;`)
