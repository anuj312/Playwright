import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://example.com/'); // Use a real URL or your app home
  }

  async getTitle() {
    return this.page.title();
  }

  async clickSomeLink() {
    await this.page.click('text=More information'); // Example selector for link
  }
}
