const { expect } = require('@playwright/test');

exports.ProductsPage=class ProductsPage
{
    constructor(page)
    {
        this.page=page
        this.inventorylist=page.locator("//div[@class='inventory_list']");
        this.productItem=page.locator(".inventory_item")
        this.shoppingcheckout=page.locator(".shopping_cart_link")
        this.cartBadge=page.locator(".shopping_cart_badge")
    }
    async verifyProductpagevisible()
    {
        await this.inventorylist.waitFor({state:'visible'})
    }
    async verifyProductCount(expectedCount)
    {
        await expect(this.productItem).toHaveCount(expectedCount);
    }
    async addtocart(name)
    {
        await this.productItem.filter({hasText:name}).locator("//button[text()='Add to cart']").click()
    }
    async clickshoppingcheckout()
    {
        await this.shoppingcheckout.click()
    }

    async addMultipleProductsToCart(productNames) {
        for (const productName of productNames) {
            await this.addtocart(productName);
        }
    }

    async verifyCartBadgeCount(expectedCount) {
        await expect(this.cartBadge).toHaveText(String(expectedCount));
    }
}