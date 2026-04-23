class CarrinhoPage {
  validarPagina() {
    cy.url({ timeout: 30000 }).should('include', '/carrinho/mobilidade');
  }

  adicionarQuantidadeCartoes(qtdCliques = 6) {
    for (let i = 0; i < qtdCliques; i += 1) {
      cy.get('.plus-button', { timeout: 20000 })
        .should('be.visible')
        .click({ force: true });
    }
  }

  preencherCreditoParaTrabalhador(valor) {
    cy.get('[data-testid="ui-text-input"]', { timeout: 20000 })
      .should('be.visible')
      .first()
      .clear()
      .type(String(valor));
  }

  seguirParaCompra() {
    cy.get('#carrinho-seguir-para-a-compra', { timeout: 20000 })
      .should('be.visible')
      .and('not.be.disabled')
      .click({ force: true });
  }
}

module.exports = CarrinhoPage;
