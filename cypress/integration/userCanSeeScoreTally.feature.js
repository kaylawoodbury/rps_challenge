describe("User can see score tally section", () => {
  beforeEach('game', () => {
    cy.visit("http://localhost:3001/");
  })

  it('for their own score', () => {
    cy.get('#usertally').should('exist')
  });

  it('for the computers score', () => { 
    cy.get('#computertally').should('exist')
  });
});