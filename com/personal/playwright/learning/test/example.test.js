const { chromium } = require('playwright'); // Import Playwright

(async () => {
    // Launch a new browser instance
    const browser = await chromium.launch({ headless: false }); // Set headless to false to see the browser
    const page = await browser.newPage(); // Open a new page
    await page.goto('https://example.com'); // Go to a webpage
    await page.screenshot({ path: 'example.png' }); // Take a screenshot
    await browser.close(); // Close the browser
})();
