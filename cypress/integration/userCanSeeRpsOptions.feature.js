//as a player
//in order to play the game
//I would like to choose to play with either rock paper of scissors

/// <reference types="Cypress" />

describe("User can see three options on the page", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('displays first option', () => {
    cy.get('#rock').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', 'Attended full stack development bootcamp.');
      cy.get('.rockbutton').should('exist');
    })
  });

  it('displays second item', () => {
    cy.get('#paper').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', 'Worked with SQL to import, organize and manipulate client data into a relational database.');
      cy.get('.paperbutton').should('exist');
    })
  });

  it('displays third item', () => {
    cy.get('#scissors').within(() => {
      cy.get(('.image')).should('exist');
      cy.get('.description').should('contain', "Ecocion was acquired by Intelex, held the same job here as at Intelex.");
      cy.get('.scissorbutton').should('exist');
    })
  });
});  
