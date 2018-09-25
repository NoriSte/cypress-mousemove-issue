
describe(`Cypress behaviour`, function() {
  it('The button will be disabled as soon as you move the mouse', function() {

    cy.visit('http://127.0.0.1:8090/index.html');
    cy.get('#button').click();

    cy.get('#button').should('have.attr', 'disabled', 'true')
  })
})
