import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


test.describe('Login tests', () => {
  let login: LoginPage;

  test.beforeEach(async ({ page }) => {
    login = new LoginPage(page);
    await login.navigate();
  });

  test('Successful login with valid credentials', async ({ page }) => {
    await login.enterUsername('student');
    await login.enterPassword('Password123');
    await login.clickLogin();

    await login.assertSuccessfulLogin();

    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  });

  test('Login fails with invalid username', async () => {
    await login.enterUsername('wronguser');
    await login.enterPassword('Password123');
    await login.clickLogin();

    const error = await login.getErrorMessage();
    expect(error).toContain('Your username is invalid!'); // Adjust based on actual error text
  });

  test('Login fails with invalid password', async () => {
    await login.enterUsername('student');
    await login.enterPassword('wrongpass');
    await login.clickLogin();

    const error = await login.getErrorMessage();
    expect(error).toContain('Your password is invalid!'); // Adjust as necessary
  });

  test('Login fails with empty username and password', async () => {
    await login.clickLogin();

    const error = await login.getErrorMessage();
    expect(error).toContain('Your username is invalid!'); // Adjust based on site behavior
  });
});
