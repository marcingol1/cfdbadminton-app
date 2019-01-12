// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('#/server/list');
    cy.contains('h1', 'Create new server here');
  });
});
