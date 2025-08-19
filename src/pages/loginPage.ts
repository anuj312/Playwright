import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async enterUsername(username: string) {
    await this.page.fill('#username', username);
  }

  async enterPassword(password: string) {
    await this.page.fill('#password', password);
  }

  async clickLogin() {
    await this.page.click('#submit');
  }

  async getErrorMessage() {
    return this.page.textContent('#error');  // adjust selector if needed
  }

  async assertSuccessfulLogin() {
    await this.page.waitForURL('**/logged-in-successfully/');
  }
}
