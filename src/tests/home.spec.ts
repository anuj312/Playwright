import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test.describe('Home Page Tests', () => {
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.navigate();
  });

  test('Title should be "Example Domain"', async () => {
    const title = await home.getTitle();
    expect(title).toBe('Example Domain');
  });

  test('Clicking "More information" navigates correctly', async ({ page }) => {
    await home.clickSomeLink();
    await expect(page).toHaveURL('https://www.iana.org/domains/example');
  });

  test('Page contains heading with text "Example Domain"', async ({ page }) => {
    const heading = await page.textContent('h1');
    expect(heading).toBe('Example Domain');
  });

  test('Page contains paragraph with expected text', async ({ page }) => {
    const paragraph = await page.textContent('p');
    expect(paragraph).toContain('illustrative examples');
  });

  test('Check the presence of a link with "More information..." text', async ({ page }) => {
    const link = page.locator('a', { hasText: 'More information...' });
    await expect(link).toBeVisible();
  });
});
