const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.octoperf.com',
    retries: {
      // Configure retry attempts for `cypress run`
      // Default is 0
      runMode: 0,
      // Configure retry attempts for `cypress open`
      // Default is 0
      openMode: 0,

    },
    video: true,
    defaultCommandTimeout: 2000,
    viewportHeight: 1000,
    viewportWidth: 1000,

    reporter: "mochawesome",
    reporterOptions: {
      "reportDir": "cypress/results",
      "overwrite": true,
      "html": true,
      "json": false
    }


  },
})