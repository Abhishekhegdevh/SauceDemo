const { test } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { ProductsPage } = require('../Pages/ProductsPage');
const loginData = require('../test-data/users.json');
const productData = require('../test-data/products.json');

test.describe('Product Listing Tests', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await loginPage.gotoLoginpage();

    await loginPage.login(
      loginData.validuser1.username,
      loginData.validuser1.password
    );
  });

  test('validate product listing page', async () => {
    await productsPage.verifyProductpagevisible();
    await productsPage.verifyProductCount(6);
  });

  test('Verify cart badge count after adding product', async () => {
    await productsPage.addMultipleProductsToCart(productData.productsToAdd);
    await productsPage.verifyCartBadgeCount(productData.productsToAdd.length);
  })
});