import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',      // Use installed Google Chrome
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'edge',
      use: {
        channel: 'msedge',      // Use installed Microsoft Edge
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox', // Use Firefox browser (bundled with Playwright)
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
