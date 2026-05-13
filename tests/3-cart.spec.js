const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');
const { CartPage } = require('../Pages/CartPage');
import loginData from '../test-data/users.json';

test.describe('Cart Tests', () => {
  let loginPage;
  let productsPage;
  let cartpage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartpage = new CartPage(page);

    await loginPage.gotoLoginpage();

    await loginPage.login(
      loginData.validuser1.username,
      loginData.validuser1.password
    );

    await productsPage.addtocart('Sauce Labs Backpack');
    await productsPage.clickshoppingcheckout();
  });

  test('Add product to cart and proceed to checkout', async ({ page }) => {
    await cartpage.verifycartproductname('Sauce Labs Backpack');
    await cartpage.clickcheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);
  });
});