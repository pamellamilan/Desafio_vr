Cypress.Commands.add('ignorarErrosTerceiros', () => {
  Cypress.on('uncaught:exception', (err) => {
    const mensagensIgnoradas = [
      'disconnect',
      'Script error',
      'ResizeObserver loop limit exceeded',
    ];

    if (mensagensIgnoradas.some((mensagem) => err.message.includes(mensagem))) {
      return false;
    }
  });
});


Cypress.Commands.add('evidencia', (nome) => {
  cy.screenshot(nome)
})