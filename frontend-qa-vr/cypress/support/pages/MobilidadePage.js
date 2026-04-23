class MobilidadePage {
  acessar() {
    cy.visit('/mobilidade');
  }

  clicarEmComprarOnline() {
    cy.contains('a,button', /comprar online/i, { timeout: 15000 })
      .should('be.visible')
      .then(($el) => {
        const href = $el.prop('href');

        if (href) {
          cy.visit(href);
          return;
        }

        cy.wrap($el)
          .scrollIntoView()
          .invoke('removeAttr', 'target')
          .click({ force: true });
      });
  }
}

module.exports = MobilidadePage;
