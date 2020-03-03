//as a player
//in order to play the game
//I would like to choose to play with either rock paper of scissors

/// <reference types="Cypress" />

describe("User can see three options on the page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  })

  it('displays first option', () => {
    cy.get('#option-rock').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', 'Attended full stack development bootcamp.');
      cy.get('.rockbutton').should('exist');
    })
  });

  it('displays second item', () => {
    cy.get('#option-paper').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', 'Worked with SQL to import, organize and manipulate client data into a relational database.');
      cy.get('.paperbutton').should('exist');
    })
  });

  it('displays third item', () => {
    cy.get('#option-scissors').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', "Ecocion was acquired by Intelex, held the same job here as at Intelex.");
      cy.get('.scissorbutton').should('exist');
    })
  });
});  
