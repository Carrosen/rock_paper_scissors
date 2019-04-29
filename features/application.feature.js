require('../spec.helper');

context('Your Description of the test scenario', () => {
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
    await browser.page.reload();
  });

  after(() => {
    browser.close();
  });

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value1']", { with: "rock" })
    await browser.clickOnButton("#button1")
    await browser.fillIn("input[id='value2']", { with: "rock" })
    await browser.clickOnButton("#button2")
    await browser.clickOnButton("#button3")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('Its a tie!');
  })

});
