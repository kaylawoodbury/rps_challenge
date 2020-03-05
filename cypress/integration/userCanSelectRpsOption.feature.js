//as a player
//in order to play the game
//I would like to choose to play with either rock paper of scissors

/// <reference types="Cypress" />

describe("User can see three options on the page", () => {
  it("calculates cooper performance", () => {
    cy.visit("/");
    cy.get("input#distance").type("1000");
    cy.get("select#gender").select("female");
    cy.get("input#age").type("23");
    cy.get("p#cooper-message").should(
      "contain",
      "23 y/o female running 1000 meters."
    );
    cy.get("p#cooper-result").should("contain", "Result: Poor");
  });
});

describe("User can play with Rock sucessfully", () => {
});

describe("User can play with Rock sucessfully", () => {
});