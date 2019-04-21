require('../spec.helper');

context('Your Description of the test scenario', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  // Example test
  it('clicking on the "Check1" button', async () => {
    await browser.fillIn("input[id='value1']", { with: "rock" })
    await browser.clickOnButton("input[value='Check1']")
    
    await browser.fillIn("input[id='value2']", { with: "rock" })
    await browser.clickOnButton("input[value='Check2']")

    // hidden function for button here
    // another clickOnButton, "check2" to display answer

    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Its a tie!');
  })
});