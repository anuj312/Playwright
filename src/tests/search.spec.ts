import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';


test.describe('Wikipedia Search Tests', () => {
  let search: SearchPage;

  test.beforeEach(async ({ page }) => {
    search = new SearchPage(page);
    await search.navigate();
  });

  test('Search for "Playwright" shows correct page title', async () => {
    await search.enterSearchTerm('Playwright');
    await search.submitSearch();

    const title = await search.getFirstResultTitle();
    expect(title).toContain('Playwright');
  });

  test('Search for non-existent term shows search results page', async ({ page }) => {
    await search.enterSearchTerm('asdflkjhasdflkjhasdf');
    await search.submitSearch();

    // Check URL includes search query
    await expect(page).toHaveURL(/search/);

    // Check page shows "Search results" text
    const heading = await page.textContent('#firstHeading');
    expect(heading).toContain('Search results');
  });

  test('Search box is visible and empty on page load', async ({ page }) => {
    const inputValue = await page.inputValue('input[name="search"]');
    expect(inputValue).toBe('');
    const searchBox = page.locator('input[name="search"]');
    await expect(searchBox).toBeVisible();
  });

  test('Pressing enter triggers search', async () => {
    await search.enterSearchTerm('Test');
    await search.submitSearch();

    const url = await page.url();
    expect(url).toContain('Test');
  });

  test('Search suggestions dropdown appears when typing', async ({ page }) => {
    const searchBox = page.locator('input[name="search"]');
    await searchBox.fill('Play');
    const suggestion = page.locator('.suggestions-result');
    await expect(suggestion).toBeVisible();
  });
});
