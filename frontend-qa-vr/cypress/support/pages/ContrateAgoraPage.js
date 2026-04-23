class ContrateAgoraPage {
  validarPagina() {
    cy.url({ timeout: 20000 }).should('include', '/contrate-agora');
    cy.contains(/encontre o produto ideal para você/i, { timeout: 20000 })
      .should('be.visible');
  }

  selecionarGestaoDeMobilidade() {
    cy.document().then((doc) => {
      const checkbox = doc.querySelector('#mobilidade');

      if (checkbox) {
        cy.get('#mobilidade').check({ force: true });
      } else {
        cy.contains(/gestão de mobilidade/i, { timeout: 15000 })
          .scrollIntoView()
          .click({ force: true });
      }
    });
  }

  clicarEmProximo() {
    cy.contains('button,a', /próximo/i, { timeout: 20000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });
  }
}

module.exports = ContrateAgoraPage;
