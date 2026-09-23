const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'egpk1g',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
