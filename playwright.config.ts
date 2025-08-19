import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',      // Use installed Google Chrome
        headless: false,         // Use headless in CI
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
    // Commented out for CI:
    // {
    //   name: 'edge',
    //   use: { channel: 'msedge', headless: false, screenshot: 'only-on-failure', video: 'retain-on-failure' },
    // },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox', headless: false, screenshot: 'only-on-failure', video: 'retain-on-failure' },
    // },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
