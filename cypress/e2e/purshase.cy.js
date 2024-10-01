import HomePage from "../../POM/homePage.js"

describe('Purshase tests', () => {

    const homepage = new HomePage();

  it('Purshase a persian food', () => {
    
    cy.RegisterAndLogin();

    homepage.fillSearch('persian');

    homepage.BotaoProcura();

    homepage.linkGato();
  })
})