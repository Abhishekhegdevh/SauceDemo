const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');
const { CartPage } = require('../Pages/CartPage');
const { CheckoutPage } = require('../Pages/CheckoutPage');
import loginData from '../test-data/users.json';

test.describe('Checkout Tests', () => {
  let loginPage;
  let productsPage;
  let cartpage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartpage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.gotoLoginpage();

    await loginPage.login(
      loginData.validuser1.username,
      loginData.validuser1.password
    );

    await productsPage.addtocart('Sauce Labs Backpack');
    await productsPage.clickshoppingcheckout();

    await cartpage.verifycartproductname('Sauce Labs Backpack');

    await page.mouse.wheel(0, 900);

    await cartpage.clickcheckout();
  });

  test('Complete checkout flow', async ({ page }) => {
    await expect(page).toHaveURL(/checkout-step-one.html/);

    await checkoutPage.entercheckoutdetails('aa', 'bb', '56600');

    await checkoutPage.clickcontinuebutton();

    await page.mouse.wheel(0, 900);

    await checkoutPage.clickfinishbutton();

    await checkoutPage.verifyordersuccessfullMessage(
      'Thank you for your order!'
    );

    await checkoutPage.clickbackhomebutton();

    await expect(page).toHaveURL(/inventory/);
  });
});