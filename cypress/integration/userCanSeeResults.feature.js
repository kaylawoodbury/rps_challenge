describe("User can see results", () => {
  beforeEach('game', () => {
    cy.visit("http://localhost:3001/");
    cy.get("#rockbutton").click();
  })


  it('if game is a tie', () => {
    cy.get('#results').should('contain', "It's a tie. Try again!")
    cy.get('#usertally').should('contain', '0')
    cy.get('#computertally').should('contain', '0')
    });
    

  it('if user wins', () => {
    cy.get('#results').should('contain', "Congratulations, you win!")
    cy.get('#usertally').should('contain', '1')
    cy.get('#computertally').should('contain', '0')
    })
    ;

  it('if user loses', () => {
    cy.get('#results').should('contain', "Better luck next time.")
    cy.get('#usertally').should('contain', '0')
    cy.get('#computertally').should('contain', '1')
    })
    ;

});