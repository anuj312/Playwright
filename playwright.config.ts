import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './src/tests',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: isCI ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
