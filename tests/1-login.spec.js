const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');
const loginData = require('../test-data/users.json');

test.describe('Login Tests', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.gotoLoginpage();
  });

  test('login test', async ({ page }) => {
    await loginPage.login(
      loginData.validuser1.username,
      loginData.validuser1.password
    );
    await expect(page).toHaveURL(/inventory/);
    await productsPage.verifyProductpagevisible();
  });

  test('Login with invalid username and password', async ({ page }) => {
    await loginPage.login(
      loginData.Invaliduser1.username,
      loginData.Invaliduser1.password
    );
    await loginPage.verifyerrormessage(loginData.Invaliduser1.errormessage)
  });
});