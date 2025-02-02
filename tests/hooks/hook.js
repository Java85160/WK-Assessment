const { setWorldConstructor, Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

class CustomHook {
  async init() {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: false }); // Set to true for headless mode
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.context = null;
      this.page = null;
    }
  }
}

setWorldConstructor(CustomHook);

Before(async function () {
  await this.init(); // Initialize Playwright before each test
});

After(async function () {
  await this.close(); // Close the browser after each test
});