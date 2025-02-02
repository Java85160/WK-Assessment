const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,  // Set to true for headless execution
    screenshot: 'only-on-failure', 
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'reports' }]],
});