describe("User can see results", () => {
  beforeEach('game', () => {
    cy.visit("http://localhost:3001/");
    cy.get("#rockbutton").click();
  })


  it('if game is a tie', () => {
    
    cy.get('#usertally').should('contain', '0')
    cy.get('#computertally').should('contain', '0')
    });
    

  it('if user wins', () => {
    
    cy.get('#usertally').should('contain', '1')
    cy.get('#computertally').should('contain', '0')
    })
    ;

  it('if user loses', () => {
    
    cy.get('#usertally').should('contain', '0')
    cy.get('#computertally').should('contain', '1')
    })
    ;

});