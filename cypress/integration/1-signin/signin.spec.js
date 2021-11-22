/* eslint-disable no-undef */
describe('SignIn', () => {
  it('should signin successfully', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Já sou grato').click();

    cy.get('input[placeholder=E-mail]').type('cypresstest@gmail.com');
    cy.get('input[placeholder=Senha]').type('gratiboxcy');
    cy.get('button[type=submit]').click();

    cy.url().should('equal', 'http://localhost:3000/plans');
  });
});
