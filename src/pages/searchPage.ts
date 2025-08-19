import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://www.wikipedia.org/');
  }

  async enterSearchTerm(term: string) {
    await this.page.fill('input[name="search"]', term);
  }

  async submitSearch() {
    await this.page.press('input[name="search"]', 'Enter');
  }

  async getFirstResultTitle() {
    return this.page.textContent('h1'); // Usually the title of the article after search
  }
}
