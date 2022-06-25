describe('Movies Component', () => {
  it('render component and verify if search element exits', () => {
    cy.visit('/');

    cy.get('[id=search]').should('to.have.length', 1);
  });

  it('render component and verify if search-btn element exits', () => {
    cy.visit('/');

    cy.get('[id=search-btn]').should('to.have.length', 1);
  });

  it('Type `Violet Sawayn` Should return a card with same text', () => {
    cy.visit('/');

    cy.get('[id=search]').type('Violet Sawayn');
    cy.get('[id=search-btn]').click();
    cy.get('[id=title]').should('to.have', 'Violet Sawayn');
  });
});
