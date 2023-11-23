const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    retries: {
      runMode: 2, // Number of test retries to run in `cypress run`
      openMode: 0 // Number of test retries to run in `cypress open`
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true,
    },
    screenshotOnRunFailure: true, // default is true
    video: true, // default is true
    viewportWidth: 1280,
    viewportHeight: 720,
    watchForFileChanges: false,
    experimentalRunAllSpecs: true, 
    trashAssetsBeforeRuns: true, 
    setupNodeEvents(on, config) {
      // Use the Cucumber preprocessor with Cypress
      on("file:preprocessor", cucumber());


      // If you need to modify other config values, do it here
      // For example, to change the baseUrl:
      config.baseUrl = 'https://www.vouchercodes.co.uk/';
      // return config;
    },

    // Specify the pattern for test files
    specPattern: 'cypress/integration/**/*.feature',
    
    // If you want to turn off the default support file
    supportFile: false,
  },
});

// If you have custom commands in a support file,
// ensure that supportFile points to the file's path, like so:
// supportFile: 'cypress/support/e2e.js',
