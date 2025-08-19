import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './src/tests',
  projects: [
    {
      name: 'chrome',
      use: {
        channel: 'chrome',
        headless: isCI, // ✅ Headless only in CI
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
