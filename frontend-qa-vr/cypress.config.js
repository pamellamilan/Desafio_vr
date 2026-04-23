const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://www.vr.com.br',
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
