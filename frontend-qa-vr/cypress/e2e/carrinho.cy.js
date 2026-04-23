Cypress.on('uncaught:exception', (err) => {
  if (err.message.includes('disconnect')) {
    return false;
  }
});

describe('Fluxo VR', () => {

  // ✅ TESTE 1 → valida navegação no domínio www
  it('Deve acessar Comprar Online á partir da página de Mobilidade', () => {

    cy.visit('https://www.vr.com.br/mobilidade');

    cy.contains(/comprar online/i)
      .invoke('removeAttr', 'target')
      .click();

    cy.url({ timeout: 15000 })
      .should('include', 'contrate-agora');

       // 👉 espera botão da tela (garante que carregou)
  cy.contains('Próximo', { timeout: 20000 })
    .should('be.visible');

  });


it('Deve preencher fluxo na loja VR', () => {

  cy.visit('https://loja.vr.com.br/carrinho/mobilidade');

  cy.location('href', { timeout: 20000 }).then((url) => {
    cy.log('URL atual:', url);
  });

  // clique no botão 
  for (let i = 0; i < 6; i++) {
  cy.get('.plus-button')
    .should('be.visible')
    .click();
}
cy.get(':nth-child(2) > .ds-c-fLOvyN > .ds-c-kBonYv > [data-testid="ui-text-input"]')
  .should('be.visible')
  .clear()
  .type('100');

  cy.get('#carrinho-seguir-para-a-compra', { timeout: 10000 })
  .should('be.visible')
  .and('not.be.disabled')
  .click();

});

});