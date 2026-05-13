const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { LogoutPage } = require('../Pages/LogoutPage');
import loginData from '../test-data/users.json';

test.describe('Logout Tests with afterEach', () => {
  let loginPage;
  let logoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);

    await loginPage.gotoLoginpage();

    await loginPage.login(
      loginData.validuser1.username,
      loginData.validuser1.password
    );
  });

  test('Verify user is logged in', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
  });

  test.afterEach(async ({ page }) => {
    await logoutPage.clickopenMenu();
    await logoutPage.clicklogoutbutton();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});